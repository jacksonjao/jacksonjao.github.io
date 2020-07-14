// La estructura de los archivos debe de ser la siguiente 'nombre_#.png'
class AnimationPng {
    constructor(sequences, mainNameSequences, id, numberOfFiles) {
        AFRAME.registerComponent(id, {
            init: function() {
                // load the .pngs
                let loader = new THREE.TextureLoader()
                this.pngArray = []

                for (let i = 0; i<numberOfFiles; i++) {
                    this.pngArray.push(loader.load(sequences+mainNameSequences+'_'+i+'.png'));
                }

                this.el.addEventListener('loaded', e => {
                    let mesh = this.el.getObject3D("mesh");
                    this.material = mesh.material
                    console.log(this.material)
                    console.log(this.el.getObject3D("mesh"))
                    var i = 0
                    this.id = setInterval(e => {
                        if (i > this.pngArray.length) i = 0;
                        this.material.map = this.pngArray[i++]
                        this.material.needsUpdate = true
                    }, 60)
                })
            },
            remove: function() {
                clearInterval(this.id);
                // free the memory
                for (let i = 0; i < this.pngArray.length; i++) {
                    this.pngArray[i].dispose();
                }
            }
        })
    }
}



