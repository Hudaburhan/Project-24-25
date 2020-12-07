class Paper{
    constructor(){
        var options = {
            restitution: 0,
            friction: 0,
            density: 1.2
        }
        this.body = Bodies.circle(250,540,20,options);
        this.width = 13;
        this.image = loadImgae("Images/paper.png");
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this. body.angle;
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image, position.x, position.y, 33, 33);
    }
}