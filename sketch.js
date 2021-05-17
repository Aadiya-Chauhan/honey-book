const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
    backgroundImg = loadImage("images/bg.jpg");
    mowgliImg = loadImage("images/balloo_and_mowgli.png")
}

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;

    //mowgli = createSprite(displayWidth/2 - 200, displayHeight/2, 100, 200);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    //drawSprites();
}
