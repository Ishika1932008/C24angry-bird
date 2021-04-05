class Bird{
    constructor(x,y){
        var options = {
            restitution: 1
        }
        this.body = Bodies.rectangle(x,y,50,50, options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
    var i = this.body.position
    i.x = mouseX;
    i.y = mouseY;
    var angle = this.body.angle
    push ()
    translate (i.x,i.y)
    rotate (angle)
    rectMode (CENTER)
    strokeWeight (5);
    stroke ("yellow");
    fill ("red");
    rect(0,0,this.width,this.height)
    pop (0)
    }
    }