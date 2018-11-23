class PlatformFire {
    constructor(x, y, width, height, color, context) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.cameraMov = 0;
        this.context = context;
        this.color = color;
    }

    draw() {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.width, this.height);
        for (var i = 0; i <= this.width / 2; i++) {
            var ran = Math.floor((Math.random() * this.width / 2) + 1);
            var ranH = Math.floor((Math.random() * this.height / 2) + 1);
            this.context.fillRect(this.x + (2 * i), this.y, 1, -this.height + (ranH * 2));
        }
        this.x += this.cameraMov;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}

