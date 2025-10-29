@echo off
echo Starting GEO Institute Development Server...
echo.

:: Kill any existing Node.js processes
echo Stopping any existing processes...
taskkill /F /IM node.exe 2>nul

:: Clean Next.js cache
echo Cleaning Next.js cache...
if exist .next (
    rmdir /s /q .next
)

:: Start development server
echo Starting development server...
echo Server will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

npm run dev