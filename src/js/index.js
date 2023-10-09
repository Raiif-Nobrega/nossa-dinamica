const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
const allowCameraButton = document.getElementById('allowCamera');
const denyCameraButton = document.getElementById('denyCamera');
const cameraFeed = document.getElementById('cameraFeed');

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
    
});

allowCameraButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            cameraFeed.srcObject = stream;
            cameraFeed.play();
            allowCameraButton.style.display = 'none';
            denyCameraButton.style.display = 'none';
            cameraFeed.style.display = 'block';
        })
        .catch(function(error) {
            console.error('Erro ao dar play no vídeo:', error);
        });
});

denyCameraButton.addEventListener('click', () => {
    alert('Você não permitiu dar play ao vídeo.');
});