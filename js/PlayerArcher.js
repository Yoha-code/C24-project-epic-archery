/*class playerArcher{

    constructor(x, y, w, h){

        var options = {
            isStatic : true
        };
        this.image = loadImage("assets/playerArcher.png");

        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, this.w, this.h, options);

        Matter.Body.setAngle(this.body, -PI/2);

        World.add(world, this.body);

    }

    display(){
        
        var pos = this.body.position;
        var angle = this.angle;

        translate(pos.x, pos.y);

        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);

    /*    if(move === "UP" &&  PlayerArcher.body.angle < 1.77){

            angleValue = -0.1;

        } else {

            angleValue = 0.1;
        }

        if(move === "DOWN" &&  PlayerArcher.body.angle > 1.47){

            angleValue = -0.1;

        } else {
            
            angleValue = 0.1;
        }

    }
    
}*/

class playerArcher {

    constructor(x, y, width, height) { 
       
        const options = {
         isStatic: true 
        }; 

        this.body = Matter.Bodies.rectangle(x, y, width, height, options);

         this.width = width; 
         this.height = height; 

         this.collapse = false; 
         
         this.image = loadImage("./assets/playerArcher.png"); 
         World.add(world, this.body); 

         Matter.Body.setAngle(this.body, -PI / 2); 
         // -90 degree 
        } 
         
         display(){

            var pos = this.body.position;
            var angle = this.body.angle; 

            if (keyIsDown(DOWN_ARROW) && angle < -1.2) { 
                angle += 0.01; 
                Matter.Body.setAngle(this.body, angle);
               } 

           if (keyIsDown(UP_ARROW) && angle > -1.9) { 

               angle -= 0.01; Matter.Body.setAngle(this.body, angle); 
              } 
              push(); 

              translate(pos.x, pos.y); 
              rotate(angle); 
              imageMode(CENTER); 
              image(this.image, 0, 0, this.width, this.height); 

              pop(); 
         }

        }
    