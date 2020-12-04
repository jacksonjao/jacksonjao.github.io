// Existing code unchanged.
window.onload = function() {
    var context = new AudioContext();
    // Setup all nodes
}

function loadingComponent() {
    let loadingElement = `<div id="loading">
<h1>${document.title}</h1>
<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>`
    document.body.insertAdjacentHTML('afterbegin', loadingElement);
}

function createArrows () {
    let arrows = `
<img class="arrow arrow--left" src="assets/images/left-arrow.png" alt="">
<img class="arrow arrow--right" src="assets/images/right-arrow.png" alt="">
`
    document.body.insertAdjacentHTML('afterbegin', arrows);
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
    let loadingElement = `<div id="contPopUp">
        <div id="popUp">
            <div id="btnClose" onclick="dialogContinue()"></div>
            <p>Te recomendamos usar audífonos para disfrutar mejor de esta experiencia</p>
            <div id="line"></div>
        </div>
    </div>`
    document.body.insertAdjacentHTML('afterbegin', loadingElement);
}

function dialogContinue() {
    let dialog = document.getElementById('contPopUp');
    dialog.style.visibility = 'hidden';
    dialog.style.opacity = '0';
    //var entity = document.querySelector('[sound]');
    //entity.components.sound.playSound();
    let videos = document.getElementsByTagName('video');
    for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
       //forcePlayVideo(video)
    }
    createArrows ();
}

function toggleVideo(video) {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
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

    var sceneEl = document.querySelector('a-scene');
    sceneEl.querySelectorAll('.clickable')[0].addEventListener("click", (event) => {
        const idVideo = event.target.getAttribute("src").split('#')[1];
        const video = document.getElementById(idVideo);
        toggleVideo(video);
    })
}

init();


