function loadingComponent() {
    let loadingElement = `<div id="loading">
<h1>${document.title}</h1>
<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>`
    document.body.insertAdjacentHTML('afterbegin', loadingElement);
}

function initLoading() {
    let counter = 0;
    THREE.DefaultLoadingManager.onLoad = function () {
        counter++;
        if (counter === 2) {
            let loadingElement = document.getElementById('loading');
            loadingElement.style.visibility = 'hidden';
            loadingElement.style.opacity = 0;
            dialog();


        }
    };
}



function dialog() {
    let loadingElement = `<div id="dialog">
    <div class="dialog__container">
        <p class="dialog__text">Te recomendamos usar audífonos para disfrutar mejor  de esta experiencia</p>
    <button class="dialog__button" onclick="dialogContinue()"> CONTINUAR </button>
    </div>
</div>`
    document.body.insertAdjacentHTML('afterbegin', loadingElement);
}

function dialogContinue() {
    let dialog = document.getElementById('dialog');
    dialog.style.visibility = 'hidden';
    dialog.style.opacity = 0;

    let videos = document.getElementsByTagName('video');
    for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        forcePlayVideo(video)
    }
}

function forcePlayVideo(video) {
    if (video.paused) {
        video.play();
        setTimeout(() => {
            forcePlayVideo(video);
        }, 2000)
    }
}

function arVrDisabled() {
let scene = document.getElementById('scene');
scene.setAttribute('vr-mode-ui', 'enabled: false');
}

function init() {
    arVrDisabled();
    loadingComponent();
    initLoading();
}

init();
