class Platform {
    constructor(x, y, width, height, context) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.cameraMov = 0;
        this.context = context;
    }

    draw() {
        this.x += this.cameraMov;
        this.context.fillStyle = "rgb(198, 152, 92)";
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.fillStyle = "rgb(23, 199, 28)";
        this.context.fillRect(this.x, this.y, this.width, 10);
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}
