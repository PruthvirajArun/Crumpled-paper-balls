
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn_u;

let engine;
let world;

var ground;
var leftSide, rightSide;
 
var ball;


function setup() {
	createCanvas(1200, 600);	


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,590,1200,20);
	leftSide = new Ground(1000, 530, 20, 100);
	rightSide = new Ground(1170, 530, 20, 100);

	//Create the Bodies Here.
    var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
	}
    ball = Bodies.circle(200, 200, 20, ball_options);
    World.add(world, ball);

	btn_u = createImg("up.png");
	btn_u.position(20,30);
	btn_u.size(50,50);
	btn_u.mouseClicked(h_force);

	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {

  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  ground.display();
  leftSide.display();
  rightSide.display();

  Engine.update(engine);

 
}

function h_force() {
	Body.applyForce(ball, {x:0,y:0}, {x:0.053,y:0});
	}



