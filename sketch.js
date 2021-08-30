const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, PlayerArcher;
var computer, computerBase, computerArrow;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
  PlayerArcher = new playerArcher(350, 260, 120, 120);

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );

  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );

  computerArcher = new ComputerArcher(
    width - 320,
    computerBase.body.position.y - 150,
    120,
    120,
  );
  
  //Create an arrow Object
  
  arrow = new playerArrow(-900, 20, 100, 20, PlayerArcher.angle);

  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  PlayerArcher.display();
  computerArcher.display();

  arrow.display();  


  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){

    //Call shoot() function and pass angle of playerArcher
    arrow.shoot(PlayerArcher.body.angle);

  }
}



