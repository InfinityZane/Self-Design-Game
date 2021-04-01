var spaceShip, spaceShipImg, aliens1, aliens2, aliens3, aliens4;
var wall;

var barrier1;
var barrier2;
var barrier3;
var barrier4;
var barrier5;

var lasers;

var score;
var life;
var gameState = 0;

function preload(){
    spaceShipImg=loadImage("spaceShip_Image.png");
}

function setup(){
    createCanvas(800,800);
    

spaceShip = createSprite(400,700,10,10);
spaceShip.addImage(spaceShipImg);

wall=createSprite(400,750,800,5);
wall.shapeColor="gold";

barrier1=createSprite(100,600,75,35);
barrier1.shapeColor="gold";
barrier2=createSprite(300,600,75,35);
barrier2.shapeColor="gold";
barrier3=createSprite(500,600,75,35);
barrier3.shapeColor="gold";
barrier4=createSprite(700,600,75,35);
barrier4.shapeColor="gold";
}

function draw(){
    background("black");

if(keyDown('LEFT_ARROW')){
    spaceShip.x=spaceShip.x-5;
}

if(keyDown('RIGHT_ARROW')){
    spaceShip.x=spaceShip.x+5;
}

if(keyDown('UP_ARROW')){
    spaceShip.y=spaceShip.y-5;
}

if(keyDown('DOWN_ARROW')){
    spaceShip.y=spaceShip.y+5;
}

spaceShip.collide(wall);


drawSprites();
}