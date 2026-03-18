# Starts the automated Git push workflow in the background
$ScriptPath = Join-Path $PSScriptRoot "script\auto-push.js"
Start-Process node -ArgumentList $ScriptPath -WindowStyle Hidden
Write-Host "Automated git workflow started in the background. Check auto-push.log for details."
