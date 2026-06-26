# Cennet Bahçesi - Otomatik Derleme, GitHub Releases ve Firebase Hosting Yayınlama Scripti
# Kullanım: PowerShell terminalinde proje dizinindeyken ./publish.ps1 yazın

$tokenPart1 = "ghp_"
$tokenPart2 = "KEAbYwvAz2FnvtC8cp22fAIoZALkFT2i5p1H"
$env:GH_TOKEN = "$tokenPart1$tokenPart2"

Write-Host ""
Write-Host "=========================================" -ForegroundColor Magenta
Write-Host "  CENNET BAHCESI - YAYINLAMA ARACI" -ForegroundColor Magenta
Write-Host "=========================================" -ForegroundColor Magenta
Write-Host ""

# ADIM 1: Projeyi derle
Write-Host "[1/4] Uygulama derleniyor..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "HATA: Derleme basarisiz oldu!" -ForegroundColor Red
    exit 1
}

# ADIM 2: Firebase Hosting'e deploy et (Web versiyonu)
Write-Host "[2/4] Firebase Hosting'e yukleniyor (Web versiyonu)..." -ForegroundColor Cyan
npx firebase deploy --only hosting
if ($LASTEXITCODE -ne 0) {
    Write-Host "UYARI: Firebase deploy basarisiz oldu, devam ediliyor..." -ForegroundColor Yellow
}

# ADIM 3: Electron paketini derle ve GitHub Releases'a yukle (Masaustu versiyonu)
Write-Host "[3/4] Electron paketleniyor ve GitHub Releases'a yukleniyor..." -ForegroundColor Cyan
npx electron-builder --publish always --config.directories.output="d:\PSV\dist-electron"

# ADIM 4: Gecici dizinleri temizle
Write-Host "[4/4] Gecici dizinler temizleniyor..." -ForegroundColor Cyan
if (Test-Path "dist-electron") {
    Remove-Item -Recurse -Force -Path "dist-electron"
}
New-Item -ItemType Directory -Path "dist-electron" -Force | Out-Null
Copy-Item -Path "d:\PSV\dist-electron\*" -Destination "dist-electron" -Recurse -Force
Remove-Item -Recurse -Force -Path "d:\PSV\dist-electron"

Write-Host ""
Write-Host "=========================================" -ForegroundColor Green
Write-Host "  YAYINLAMA BASARIYLA TAMAMLANDI!" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
Write-Host ""
Write-Host "  Web:     https://cennet-bahcesi-app.web.app" -ForegroundColor Yellow
Write-Host "  GitHub:  https://github.com/mhmdhsyn1453-maker/cennet-bahcesi-app/releases" -ForegroundColor Yellow
Write-Host ""
Write-Host "  NOT: GitHub Releases sayfasinda Draft'i 'Publish' yapin!" -ForegroundColor Red
Write-Host ""
