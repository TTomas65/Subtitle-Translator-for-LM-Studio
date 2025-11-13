@echo off
setlocal

REM English comments only
REM Detect script directory
set "SCRIPT_DIR=%~dp0"

REM Configuration (you can change ports here)
set "PROXY_PORT=3001"
set "LM_STUDIO_BASE=http://127.0.0.1:1234"

REM Check Node.js availability
where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js is not installed or not in PATH. Please install Node.js from https://nodejs.org/ and try again.
  pause
  exit /b 1
)

REM Start proxy server (non-blocking)
pushd "%SCRIPT_DIR%"
echo [INFO] Starting LM Studio CORS proxy on port %PROXY_PORT% -> %LM_STUDIO_BASE%
start "LM Studio Proxy" cmd /c "set PROXY_PORT=%PROXY_PORT% && set LM_STUDIO_BASE=%LM_STUDIO_BASE% && node proxy.js"
popd

REM Small delay to allow proxy to start
timeout /t 2 /nobreak >nul 2>nul

REM Build file URL for index.html with query param
set "INDEX_PATH=%SCRIPT_DIR%index.html"
set "URL_PATH=%INDEX_PATH:\=/%"
set "FILE_URL=file:///%URL_PATH%?useProxy=1"

REM Try Edge, then Chrome, then default handler
set "EDGE=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
if exist "%EDGE%" (
  start "" "%EDGE%" "%FILE_URL%"
  goto :eof
)

set "EDGE2=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
if exist "%EDGE2%" (
  start "" "%EDGE2%" "%FILE_URL%"
  goto :eof
)

set "CHROME=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
if exist "%CHROME%" (
  start "" "%CHROME%" "%FILE_URL%"
  goto :eof
)

set "CHROME2=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
if exist "%CHROME2%" (
  start "" "%CHROME2%" "%FILE_URL%"
  goto :eof
)

REM Fallback: default browser
start "" "%FILE_URL%"
exit /b 0
