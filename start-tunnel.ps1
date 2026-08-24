# VoxClass Studio - Launch Local Server & Live Public Tunnel
Write-Host "Starting VoxClass Studio on http://localhost:3000 ..." -ForegroundColor Green
Start-Process python -ArgumentList "-m http.server 3000" -WindowStyle Hidden

Write-Host "Opening live public tunnel..." -ForegroundColor Cyan
ssh -o ServerAliveInterval=15 -o StrictHostKeyChecking=no -R 80:localhost:3000 nokey@localhost.run
