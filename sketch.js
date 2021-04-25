const Engine = Matter.Engine;
var num = 100; console.log(num); 
//100
 var string = " hi im kameron" 
 console.log(string);
  //hi im kameron
   var bool = true; console.log(bool); 
   //true
    var object;
     console.log(object); 
     //undefined 
     object = null; console.log(object)

     var array = [10,"kameron", true]
     console.log(array)
     //(array[2]) 
      var array1 = [10,20, 30] 
      console.log
      (array[1]) 
      console.log(array1) 
      var arr4= ["hi", "how"] 
      console.log(arr4) 
      arr4.push("u")
       console.log(arr4)
        arr4.pop() 
        console.log(arr4)

const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;



function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      slingshot.attach(bird.body);
    }
  }

  //https://github.com/rashmi-sathya/c30final/find/main
  //https://www.w3schools.com/charsets/ref_html_ascii.asp