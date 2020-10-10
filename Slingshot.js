class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.slingImage1 = loadImage("sprites/sling1.png");
        this.slingImage2 = loadImage("sprites/sling2.png");
        this.slingImage3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.slingImage1, 200, 20);
        image(this.slingImage2, 170, 20);
        
        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ();

            stroke(53,24,9);

            if(pointA.x < 220){
                strokeWeight(6);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x - 30, pointB.y - 3);
                image(this.slingImage3, pointA.x - 30, pointA.y - 10, 15, 30);
            }else{
                strokeWeight(1);
line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x - 30, pointB.y - 3);
                image(this.slingImage3, pointA.x - 30, pointA.y - 10, 15, 30);
            }
            pop ();
        }
    }
    
}