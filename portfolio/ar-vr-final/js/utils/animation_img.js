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



/*
// model
gltfLoader = new THREE.GLTFLoader()
gltfLoader.load( "assets/sprites/art1/vr19x.gltf", function ( model ) {
    console.log(model)
    mixer= new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {mixer.clipAction(clip).play(); });
    scene.add(model.scene)});

*/


/*
AFRAME.registerComponent('video-handler',{
    init: function() {
    let el = this.el;
    let vid = document.querySelector("#myvideo");
    console.log(vid)
    vid.pause();
        console.log(this.data)
}});
*/



/*
    let checkIfVideoCharged = setInterval(()=> {
        var video = document.getElementById("videoAsset");
        try {
            console.log(video.readyState)
        if ( video.readyState === 4 ) {
            document.getElementById("videito").setAttribute('src',video.src.split("ar-vr-final/")[1])

           console.log( document.getElementById("videito"))
            clearInterval(checkIfVideoCharged)
        }
        }
        catch (e) {
            console.log("there aren't any videos")
            clearInterval(checkIfVideoCharged)

        }
    },8000)
*/


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
