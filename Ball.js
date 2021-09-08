class Ball{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restituition: 0, 
            density:1.2,
            friction: 1.4
        }
        this.body = Bodies.rectangle(x,y,width-15,height-20,options);
        this.width = width;
        this.height = height;     
        this.image = loadImage("Images/paper.png");

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);

        
        pop();
    }
}