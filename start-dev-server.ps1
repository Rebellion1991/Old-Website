# Hugo Development Server Starter Script
Write-Host "Starting Hugo development server..." -ForegroundColor Green

# Check if Hugo is installed
$hugoInstalled = $null
try {
    $hugoInstalled = Get-Command hugo -ErrorAction Stop
    Write-Host "Hugo is installed at: $($hugoInstalled.Source)" -ForegroundColor Green
} catch {
    Write-Host "Hugo is not installed or not in your PATH." -ForegroundColor Red
    Write-Host "Please install Hugo from https://gohugo.io/installation/" -ForegroundColor Yellow
    Write-Host "Or run: choco install hugo -y (if you have Chocolatey installed)" -ForegroundColor Yellow
    exit 1
}

# Start the Hugo server
Write-Host "Starting Hugo server with drafts enabled..." -ForegroundColor Cyan
Write-Host "Your website will be available at http://localhost:1313/" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow

# Start Hugo server with drafts enabled
hugo server -D
