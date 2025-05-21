# Hugo Production Build Script
Write-Host "Building Hugo site for production..." -ForegroundColor Green

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

# Remove existing public directory if it exists
if (Test-Path -Path "public") {
    Write-Host "Removing existing public directory..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "public"
}

# Build the site with minification
Write-Host "Building site with minification..." -ForegroundColor Cyan
hugo --minify

# Check if build was successful
if ($LASTEXITCODE -eq 0) {
    Write-Host "Build completed successfully!" -ForegroundColor Green
    Write-Host "Your site has been built in the 'public' directory." -ForegroundColor Cyan
} else {
    Write-Host "Build failed with exit code $LASTEXITCODE" -ForegroundColor Red
}
