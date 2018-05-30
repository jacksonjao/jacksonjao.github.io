class Bullet {


    constructor(x,y,width, height,color,dir,context){
        this.width = width;
        this.height = height;
        this.dir=dir;
        this.x = x;
        this.y = y;
        this.gravity = 0.001;
        this.gravitySpeed = 0;
        this.isJumping=false;
        this.speedX = 2;


        this.shape = function() {
            context.fillStyle = color;
            context.fillRect(this.x, this.y, this.width, this.height);
        }

        this.move = function() {
            if(this.dir>0){
            this.x += this.speedX;}
            if(this.dir<0){
                this.x -= this.speedX;}
        }

        this.fall = function () {
                this.gravitySpeed += this.gravity;
                this.y += this.gravitySpeed;
        }


    }

    draw() {

        this.move();
        this.fall();
        this.shape();
    }




    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }






}

export default Bullet;