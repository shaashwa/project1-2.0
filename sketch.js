var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

 
 World.add(world,this.body);
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 75; j<=width-10;j=j+50)
  {
    plinkos.push(new plinkos(j,175));
  }

   for(var j = 50; j<=width; j=j+50)
   {
     plinkos.push(new plinkos(j,175))
   }
  
  //create particle objects
  
    
}
 


function draw() {
  background("white");
  textSize(25)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
  if(frameCount%30===0){
    particles.push(new particles(random(width/2-30,width/2+30),10,10));
    score++
  }
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 

}