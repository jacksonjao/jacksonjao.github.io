class Main {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        console.log('2')
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.world = new World(this, this.context);
        setInterval(() => {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.world.draw();
        }, 1);

        document.body.scrollTop = 0; // <-- pull the page back up to the top
        document.body.style.overflow = 'hidden'; //
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    updateScreen(width, height) {
        document.getElementById('size').innerHTML = height.toString();
        this.canvas.width = width;
        this.canvas.height = height;
    }

    finish() {
        this.canvas.style.opacity = "0"
        document.getElementById("newGame").style.visibility = "visible";
    }
}


const main = new Main();
document.getElementById('size').innerHTML = window.innerHeight.toString();
document.addEventListener('keydown', function (event) {
    main.world.keyBoard('keydown', event);
});
document.addEventListener('keyup', function (event) {
    main.world.keyBoard('keyup', event);
});

function btnLeft(value) {
    main.world.buttons('left', value)
}

function btnRight(value) {
    main.world.buttons('right', value)
}

function btnJump() {
    main.world.buttons('jump')
}

function btnFire() {
    main.world.buttons('fire')
}

window.onresize = function (event) {
    main.updateScreen(window.innerWidth, window.innerHeight)
};

