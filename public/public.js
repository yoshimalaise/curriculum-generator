function hideCenterElements() {
  document.getElementById("loading-bar").style.display = 'none';
  document.getElementById("file-upload-wrapper").style.display = 'none';
  document.getElementById("qr-code").style.display = 'none';
}

function navigateToUploadZone() {
  hideCenterElements();
  document.getElementById("file-upload-wrapper").style.display = 'block';
}

function navigateToLoadingScreen() {
  hideCenterElements();
  document.getElementById("loading-bar").style.display = 'block';
}

function navigateToQrCode(imgUrl) {
  hideCenterElements();
  document.getElementById("qr-code").style.display = 'block';
  document.getElementById("qr-image").src = imgUrl;
}

async function analyzeRepo(event) {
  setTimeout(() => navigateToLoadingScreen(), 1000);
  const call = await fetch('api/select-folder');
  const body = await call.json();
  navigateToQrCode(body.qrCode);
}

document.getElementById('btnSelectRepo').addEventListener('click', analyzeRepo);
document.getElementById('btnBack').addEventListener('click', analyzeRepo);

navigateToUploadZone();

