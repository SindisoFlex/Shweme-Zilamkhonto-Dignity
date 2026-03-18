@echo off
echo Starting automated git workflow in the background...
echo Check auto-push.log for details.
start /b node "%~dp0script\auto-push.js"
