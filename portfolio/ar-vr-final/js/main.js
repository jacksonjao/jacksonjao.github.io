
new AnimationPngBySrc('assets/sprites/art1/birds_animation_group/', 'bird','birds-animation' , 40);
new AnimationPngBySrc('assets/sprites/art1/woman/', 'girl','woman-animation' , 13);

function openFullscreen() {
    const elem = document.body

    console.log(elem)
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}


/*
let frameRate = 0;
let i = 0;
function animation () {
        frameRate++;
        if(frameRate%4 === 0) {
            frameRate = 0;

            i++;
            if (i >= 14) i = 0;
                document.getElementById("woman").setAttribute("src", "assets/sprites/art1/woman/girl_"+i+".png");

        }


    window.requestAnimationFrame(animation);
}

setTimeout(() => {window.requestAnimationFrame(animation);
},4000)


*/
