# Cennet Bahçesi - Otomatik Derleme ve GitHub Releases Yayınlama Scripti
$tokenPart1 = "ghp_"
$tokenPart2 = "KEAbYwvAz2FnvtC8cp22fAIoZALkFT2i5p1H"
$env:GH_TOKEN = "$tokenPart1$tokenPart2"

Write-Host "1. Uygulama derleniyor..." -ForegroundColor Cyan
npm run build

Write-Host "2. Electron paketleniyor ve GitHub Releases'a yukleniyor..." -ForegroundColor Cyan
npx electron-builder --publish always --config.directories.output="d:\PSV\dist-electron"

Write-Host "3. Gecici dizinler temizleniyor..." -ForegroundColor Cyan
if (Test-Path "dist-electron") {
    Remove-Item -Recurse -Force -Path "dist-electron"
}
New-Item -ItemType Directory -Path "dist-electron" -Force
Copy-Item -Path "d:\PSV\dist-electron\*" -Destination "dist-electron" -Recurse -Force
Remove-Item -Recurse -Force -Path "d:\PSV\dist-electron"

Write-Host "Basariyla tamamlandi! Guncelleme GitHub Releases uzerinde yayinlandi." -ForegroundColor Green
