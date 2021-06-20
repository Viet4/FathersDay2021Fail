const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var choice = [];
var playState = 0, playButton, playImg;
var bg;

var button1, button2, button3, button4, buttonImg;
var house0, undo, undoImg, poem;
var house1, house2, house3, house4;

var roof1, roof2, roof3, roof4;
var roof1h1, roof2h1, roof3h1, roof4h1;
var roof1h2, roof2h2, roof3h2, roof4h2;
var roof1h3, roof2h3, roof3h3, roof4h3;
var roof1h4, roof2h4, roof3h4, roof4h4;

var wall1, wall2, wall3, wall4;
var wall1h1, wall2h1, wall3h1, wall4h1;
var wall1h2, wall2h2, wall3h2, wall4h2;
var wall1h3, wall2h3, wall3h3, wall4h3;
var wall1h4, wall2h4, wall3h4, wall4h4;

var window1, window2, window3, window4;
var window1h1, window2h1, window3h1, window4h1;
var window1h2, window2h2, window3h2, window4h2;
var window1h3, window2h3, window3h3, window4h3;
var window1h4, window2h4, window3h4, window4h4;

var door1, door2, door3, door4;
var door1h2, door2h2, door3h2, door4h2;
var door1h3, door2h3, door3h3, door4h3;
var door1h4, door2h4, door3h4, door4h4;

var bush1, bush2, bush3, bush4;
var bush1h, bush2h, bush3h, bush4h;

function preload(){
  buttonImg = loadImage("images/button.png");
  house0 = loadImage("images/house0.png");
  undoImg = loadImage("images/undo.png");
  playImg = loadImage("images/play.png");
  poem = loadImage("images/poem.png");
  bg = loadImage("images/background.jpg");

  house1 = loadImage("images/house1.png");
  house2 = loadImage("images/house2.png");
  house3 = loadImage("images/house3.png");
  house4 = loadImage("images/house4.png");

  roof1 = loadImage("images/roofs/roof1.png");
  roof2 = loadImage("images/roofs/roof2.png");
  roof3 = loadImage("images/roofs/roof3.png");
  roof4 = loadImage("images/roofs/roof4.png");

  roof1h1 = loadImage("images/roofs/roof1h1.png");
  roof2h1 = loadImage("images/roofs/roof2h1.png");
  roof3h1 = loadImage("images/roofs/roof3h1.png");
  roof4h1 = loadImage("images/roofs/roof4h1.png");
  roof1h2 = loadImage("images/roofs/roof1h2.png");
  roof2h2 = loadImage("images/roofs/roof2h2.png");
  roof3h2 = loadImage("images/roofs/roof3h2.png");
  roof4h2 = loadImage("images/roofs/roof4h2.png");
  roof1h3 = loadImage("images/roofs/roof1h3.png");
  roof2h3 = loadImage("images/roofs/roof2h3.png");
  roof3h3 = loadImage("images/roofs/roof3h3.png");
  roof4h3 = loadImage("images/roofs/roof4h3.png");
  roof1h4 = loadImage("images/roofs/roof1h4.png");
  roof2h4 = loadImage("images/roofs/roof2h4.png");
  roof3h4 = loadImage("images/roofs/roof3h4.png");
  roof4h4 = loadImage("images/roofs/roof4h4.png");

  wall1 = loadImage("images/walls/wall1.png");
  wall2 = loadImage("images/walls/wall2.png");
  wall3 = loadImage("images/walls/wall3.png");
  wall4 = loadImage("images/walls/wall4.png");

  wall1h1 = loadImage("images/walls/wall1h1.png");
  wall2h1 = loadImage("images/walls/wall2h1.png");
  wall3h1 = loadImage("images/walls/wall3h1.png");
  wall4h1 = loadImage("images/walls/wall4h1.png");
  wall1h2 = loadImage("images/walls/wall1h2.png");
  wall2h2 = loadImage("images/walls/wall2h2.png");
  wall3h2 = loadImage("images/walls/wall3h2.png");
  wall4h2 = loadImage("images/walls/wall4h2.png");
  wall1h3 = loadImage("images/walls/wall1h3.png");
  wall2h3 = loadImage("images/walls/wall2h3.png");
  wall3h3 = loadImage("images/walls/wall3h3.png");
  wall4h3 = loadImage("images/walls/wall4h3.png");
  wall1h4 = loadImage("images/walls/wall1h4.png");
  wall2h4 = loadImage("images/walls/wall2h4.png");
  wall3h4 = loadImage("images/walls/wall3h4.png");
  wall4h4 = loadImage("images/walls/wall4h4.png");

  window1 = loadImage("images/windows/window1.png");
  window2 = loadImage("images/windows/window2.png");
  window3 = loadImage("images/windows/window3.png");
  window4 = loadImage("images/windows/window4.png");

  window1h1 = loadImage("images/windows/window1h1.png");
  window2h1 = loadImage("images/windows/window2h1.png");
  window3h1 = loadImage("images/windows/window3h1.png");
  window4h1 = loadImage("images/windows/window4h1.png");
  window1h2 = loadImage("images/windows/window1h2.png");
  window2h2 = loadImage("images/windows/window2h2.png");
  window3h2 = loadImage("images/windows/window3h2.png");
  window4h2 = loadImage("images/windows/window4h2.png");
  window1h3 = loadImage("images/windows/window1h3.png");
  window2h3 = loadImage("images/windows/window2h3.png");
  window3h3 = loadImage("images/windows/window3h3.png");
  window4h3 = loadImage("images/windows/window4h3.png");
  window1h4 = loadImage("images/windows/window1h4.png");
  window2h4 = loadImage("images/windows/window2h4.png");
  window3h4 = loadImage("images/windows/window3h4.png");
  window4h4 = loadImage("images/windows/window4h4.png");

  door1 = loadImage("images/doors/door1.png");
  door2 = loadImage("images/doors/door2.png");
  door3 = loadImage("images/doors/door3.png");
  door4 = loadImage("images/doors/door4.png");

  door2h1 = loadImage("images/doors/door2h1.png");
  door3h1 = loadImage("images/doors/door3h1.png");
  door4h1 = loadImage("images/doors/door4h1.png");
  door2h2 = loadImage("images/doors/door2h2.png");
  door3h2 = loadImage("images/doors/door3h2.png");
  door4h2 = loadImage("images/doors/door4h2.png");
  door2h3 = loadImage("images/doors/door2h3.png");
  door3h3 = loadImage("images/doors/door3h3.png");
  door4h3 = loadImage("images/doors/door4h3.png");
  door2h4 = loadImage("images/doors/door2h4.png");
  door3h4 = loadImage("images/doors/door3h4.png");
  door4h4 = loadImage("images/doors/door4h4.png");

  bush1 = loadImage("images/extra/bush1.png");
  bush2 = loadImage("images/extra/bush2.png");
  bush3 = loadImage("images/extra/bush3.png");
  bush4 = loadImage("images/extra/bush4.png");
  bush1h = loadImage("images/extra/bush1h.png");
  bush2h = loadImage("images/extra/bush2h.png");
  bush3h = loadImage("images/extra/bush3h.png");
  bush4h = loadImage("images/extra/bush4h.png");

  stairs1 = loadImage("images/extra/stairs1.png");
  stairs2 = loadImage("images/extra/stairs2.png");
  stairs3 = loadImage("images/extra/stairs3.png");
  stairs4 = loadImage("images/extra/stairs4.png");
  stairs1h = loadImage("images/extra/stairs1h.png");
  stairs2h = loadImage("images/extra/stairs2h.png");
  stairs3h = loadImage("images/extra/stairs3h.png");
  stairs4h = loadImage("images/extra/stairs4h.png");

  extra1 = loadImage("images/extra/extra1.png");
  extra2 = loadImage("images/extra/extra2.png");
  extra3 = loadImage("images/extra/extra3.png");
  extra4 = loadImage("images/extra/extra4.png");
  extra1h = loadImage("images/extra/extra1h.png");
  extra2h = loadImage("images/extra/extra2h.png");
  extra3h = loadImage("images/extra/extra3h.png");
  extra4h = loadImage("images/extra/extra4h.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  engine = Engine.create();
  world = engine.world;

  playButton = createSprite(displayWidth*.5, displayHeight*.875);
  playButton.addImage(playImg);
  playImg.scale = displayHeight/10;

  button1 = createSprite(displayWidth*.125, displayHeight*.25, -1, -1);
  button2 = createSprite(displayWidth*.125, displayHeight*.75, -1, -1);
  button3 = createSprite(displayWidth*.875, displayHeight*.25, -1, -1);
  button4 = createSprite(displayWidth*.875, displayHeight*.75, -1, -1);

  undo = createSprite(displayWidth*.125, displayHeight*.5, -1, -1);
}

function draw() {
  background(bg); 
  
  Engine.update(engine);
  
  //console.log(displayWidth);
  //console.log(displayHeight);
  console.log(choice.length);

  if (playState === 0) {
    imageMode(CENTER);
    textAlign(CENTER);
    textSize(displayWidth/20);
    fill("#D4D4D4");
    textStyle("bold");
    textFont("Candara");

    text("Father's Day: Design and Build a House", displayWidth/2, displayHeight*.125);

    image(poem, displayWidth*.5, displayHeight*.5, displayHeight*.75, displayHeight*.75);

    if (mousePressedOver(playButton)) {
      playState = 1;
    }
  }
  else if (playState === 1) {

    playButton.lifetime = 0;

    button1.addImage(buttonImg);
    button2.addImage(buttonImg);
    button3.addImage(buttonImg);
    button4.addImage(buttonImg);
    button1.scale = displayHeight/1000;
    button2.scale = displayHeight/1000;
    button3.scale = displayHeight/1000;
    button4.scale = displayHeight/1000;

    undo.addImage(undoImg);
    undo.scale = displayHeight/2000;

    if (frameCount > 5){
      if (mousePressedOver(button1)) {
        choice.push(1);
        frameCount = 0;
      }
      else if (mousePressedOver(button2)) {
        choice.push(2);
        frameCount = 0;
      }
      else if (mousePressedOver(button3)) {
        choice.push(3);
        frameCount = 0;
      }
      else if (mousePressedOver(button4)) {
        choice.push(4);
        frameCount = 0;
      }
      else if (mousePressedOver(undo)) {
        choice.pop();
        frameCount = 0;
      }
    }
  }
  else if (playState === 2) {
    undo.lifetime = 0;
    button1.lifetime = 0;
    button2.lifetime = 0;
    button3.lifetime = 0;
    button4.lifetime = 0;
    house();
    roof();
    wall();
    door();
    windows();
    extra();

    textAlign(CENTER);
    textSize(displayWidth/30);
    fill("#D4D4D4");
    textStyle("bold");
    textFont("Candara");

    text("This is your final product.", displayWidth/2, displayHeight*.25);
  }

  drawSprites();

  if (playState === 1) {
    choices();
    house();
    roof();
    wall();
    door();
    windows();
    extra();
  }

  if (choice[0] === 1 && choice.length === 5) {
    playState = 2;
  }
  else if (choice[0] !== 1 && choice.length === 6) {
    playState = 2;
  }
}