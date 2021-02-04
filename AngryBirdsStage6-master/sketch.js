const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform,ground,grond;
var soldier1,soldier2,plane1,plane2,plane3;
var array = [];



function preload() {
    backgroundImg = loadImage("sprites/military base.jpg");
}

function setup(){
    var canvas = createCanvas(1350,650);
    engine = Engine.create();
    world = engine.world;

    soldier1 = new Soldiers(100,600);
    soldier2 = new Soldiers(100,400);
    
    ground = new Ground(130,660,2990,20);
    grond = new Ground(100,450,100,10);

    
    randomValue();
}



function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
   soldier1.display();
   soldier2.display();

   ground.display();
   grond.display();
  
   for (var j = 0;j< 3; j++){
       array[j]
    array[j].display();
   }
    
}   


function randomValue(){
   /* i = Math.round(random(1,3));
    plane = new Planes(400,450,i);
    console.log(plane)
    Array[]
    plane.display();*/

    for (var j = 0; j < 3; j++) {
        i = Math.round(random(1,3));
        console.log(i)
    array[j] = new Planes(1270,Math.round(random(200,400)),i);
    }
    
}
