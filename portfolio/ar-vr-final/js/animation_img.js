// La estructura de los archivos debe de ser la siguiente 'nombre_#.png'
class AnimationPngBySrc {
    constructor(sequences, mainNameSequences, id, numberOfFiles) {
        AFRAME.registerComponent(id, {
            init: function() {
                // load the .pngs
                let i = 0;
                this.el.addEventListener('loaded', element => {

                    setInterval(e => {
                        i++;
                        if (i > numberOfFiles) i = 0;
                        element.target.setAttribute("src", sequences + mainNameSequences + '_' + i + '.png');
                    }, 60)

                })
            },
        })
    }
}



