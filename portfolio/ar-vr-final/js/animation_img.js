// La estructura de los archivos debe de ser la siguiente 'nombre_#.png'
class AnimationPngBySrc {
    constructor(sequences, mainNameSequences, id, numberOfFiles) {
        AFRAME.registerComponent(id, {
            init: function() {
                // load the .pngs
                let frameRate = 0;
                let i = 0;
                this.el.addEventListener('loaded', e => {
                    function animation () {
                        frameRate++;
                        if (frameRate % 3 === 0) {
                            frameRate = 0;
                            i++;
                            if (i > numberOfFiles) i = 0;
                            e.target.setAttribute("src", sequences + mainNameSequences + '_' + i + '.png');
                        }
                        window.requestAnimationFrame(animation);
                    }
                    window.requestAnimationFrame(animation);
                })
            },
        })
    }
}



