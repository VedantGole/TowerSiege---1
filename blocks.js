class Cube{
    constructor(x, y, width, height){
        var options = {isStatic : false};
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = width;
        World.add(myWorld, this.body);
        //this.Visiblity = 255;

    }
    display(){
        //var rand = Math.round(random(1, 5));
        // console.log(this.body.speed);
        // console.log(this.Visiblity);
        //if(this.body.speed < 2){
            //this.Visiblity = 0;
        //}
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("gray");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height)
        pop();
    }
}