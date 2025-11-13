// Minimal LM Studio proxy without external dependencies
// English comments and messages only

const http = require('http');
const https = require('https');
const { URL } = require('url');

const PROXY_PORT = Number(process.env.PROXY_PORT || 3001);
// Prefer IPv4 loopback by default to avoid potential IPv6 (::1) binding mismatches
const TARGET_BASE = process.env.LM_STUDIO_BASE || 'http://127.0.0.1:1234';

function setCors(res, origin) {
  res.setHeader('Access-Control-Allow-Origin', origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
  res.setHeader('Access-Control-Max-Age', '86400');
}

const server = http.createServer((clientReq, clientRes) => {
  const origin = clientReq.headers['origin'] || '*';
  setCors(clientRes, origin);

  if (clientReq.method === 'OPTIONS') {
    clientRes.writeHead(204);
    clientRes.end();
    return;
  }

  // Only proxy /v1/*
  const path = clientReq.url || '/';
  if (!path.startsWith('/v1/')) {
    clientRes.writeHead(404, { 'content-type': 'application/json' });
    clientRes.end(JSON.stringify({ error: 'Not found' }));
    return;
  }

  const targetUrl = new URL(path, TARGET_BASE);
  const isHttps = targetUrl.protocol === 'https:';

  const headers = { ...clientReq.headers };
  delete headers['host'];
  delete headers['content-length'];
  delete headers['origin'];

  const options = {
    method: clientReq.method,
    headers,
    hostname: targetUrl.hostname,
    port: targetUrl.port || (isHttps ? 443 : 80),
    path: targetUrl.pathname + targetUrl.search,
  };

  const upstreamReq = (isHttps ? https : http).request(options, (upstreamRes) => {
    // Mirror content-type and status, keep CORS headers already set
    const contentType = upstreamRes.headers['content-type'];
    if (contentType) clientRes.setHeader('content-type', contentType);

    clientRes.writeHead(upstreamRes.statusCode || 500);
    upstreamRes.pipe(clientRes);
  });

  upstreamReq.on('error', (err) => {
    console.error('Proxy error:', err);
    clientRes.writeHead(502, { 'content-type': 'application/json' });
    // Include diagnostic fields for easier troubleshooting
    clientRes.end(JSON.stringify({
      error: 'Bad gateway',
      code: err && err.code,
      errno: err && err.errno,
      syscall: err && err.syscall,
      address: err && err.address,
      port: err && err.port
    }));
  });

  if (clientReq.method === 'GET' || clientReq.method === 'HEAD') {
    upstreamReq.end();
  } else {
    // Pipe request body to upstream
    clientReq.pipe(upstreamReq);
  }
});

server.listen(PROXY_PORT, () => {
  console.log(`LM Studio proxy listening on http://localhost:${PROXY_PORT}`);
  console.log(`Forwarding to ${TARGET_BASE}`);
});
