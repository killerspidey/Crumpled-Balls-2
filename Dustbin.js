class Dustbin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 100;
        this.thickness = 20;
        this.angle = 0;

        this.image = loadImage("dustbin.png");

        this.leftWall = Bodies.rectangle(this.x - this.width / 2, this.y - this.height / 2, this.thickness, this.height, { isStatic: true });
        World.add(world, this.leftWall);

        this.bottomWall = Bodies.rectangle(this.x, this.y, this.width, this.thickness, { isStatic: true });
        World.add(world, this.bottomWall);

        this.rightWall = Bodies.rectangle(this.x + this.width / 2, this.y - this.height / 2, this.thickness, this.height, { isStatic: true });
        World.add(world, this.rightWall);
    }
    display() {
        var pos1 = this.leftWall.position;
        var pos2 = this.bottomWall.position;
        var pos3 = this.rightWall.position;

        push();
        translate(pos1.x, pos1.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        rotate(this.angle);
        pop();

        push();
        translate(pos2.x, pos2.y + 10);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        imageMode(CENTER);
        image(this.image, 0, -this.height / 2, this.width, this.height);
        pop();

        push();
        translate(pos3.x, pos3.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        rotate(-1 * this.angle);
        pop();
    }
}