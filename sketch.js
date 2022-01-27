const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var pedra, borracha, ferro;


function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600, height, 1200, 20)
    hammer = new Hammer(10, 100);
    pedra = new Pedra(100, 200, 60,60);
    ferro = new Ferro(300, 350);
    borracha = new Rubber(200, 100, 100);

}

function draw() {
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    pedra.display();
    ferro.display();
    borracha.display();
}