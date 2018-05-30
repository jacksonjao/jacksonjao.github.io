
var width = window.innerWidth;
var height= window.innerHeight;
function startGame() {
    GAME.start();
    import  ("./world.js")
}


const SETTINGS = {
    width:width,
    height:height,
}

const GAME = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = SETTINGS.width;
        this.canvas.height = SETTINGS.height;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}




// add listener to disable scroll
window.addEventListener('scroll', window.scrollTo( 0, 0 ));

