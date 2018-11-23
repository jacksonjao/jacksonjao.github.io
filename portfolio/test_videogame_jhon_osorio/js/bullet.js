class Bullet {
    constructor(x, y, width, height, color, dir, context) {
        this.width = width;
        this.height = height;
        this.dir = dir;
        this.x = x;
        this.y = y;
        this.gravity = 0.001;
        this.gravitySpeed = 0.1;
        this.isJumping = false;
        this.speedX = 2;
        this.cameraMov = 0;
        this.context = context;
        this.color = color;
    }

    draw() {
        this.move();
        this.shape();
    }

    shape() {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
        if (this.dir > 0) {
            this.x += this.speedX + this.cameraMov;
        }
        if (this.dir < 0) {
            this.x -= this.speedX - this.cameraMov;
        }
    }

    fall() {
        this.gravitySpeed += this.gravity;
        this.y += this.gravitySpeed;
    }
}

