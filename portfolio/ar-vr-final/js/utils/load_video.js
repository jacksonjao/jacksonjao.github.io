let counter = 0;
THREE.DefaultLoadingManager.onLoad = function () {
    counter++;
    if (counter === 2) {
        let videos = document.getElementsByTagName('video');
        let loadingElement = document.getElementById('loading');
        loadingElement.style.visibility = 'hidden';
        loadingElement.style.opacity = 0;
        for (let i = 0; i < videos.length; i++) {
            const video = videos[i];
            forcePlayVideo(video)
        }
    }
};

function forcePlayVideo(video) {
    if (video.paused) {
        video.play();
        setTimeout(() => {
            forcePlayVideo(video);
        }, 2000)
    } else {
    }
}

