const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var log1;
var p;

function setup(){
    var canvas = createCanvas(1500,900);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(961.5,850,75,75);
    box2 = new Box(1233.5,850,75,75);
    ground = new Ground(200,height,3000,20)
    log1 = new Log(1100,800,350,PI/2);
    p = new bird(100,800,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    p.display();
}