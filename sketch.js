var canvas;
var music;
var surface1,surface2,surface3,surface4, box
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1= createSprite(125,575,150,20)
    surface2= createSprite(325,575,150,20)
    surface3= createSprite(500,575,150,20)
    surface4= createSprite(700,575,150,20)

    surface1.shapeColor="red"
    surface2.shapeColor="blue"
    surface3.shapeColor="orange"
    surface4.shapeColor="purple"



    //create box sprite and give velocity
    box=createSprite(550,450,20,20)
    box.velocityY=2;
    box.velocityX=2;
    box.shapeColor="white"
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();



    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display();
    box.display();
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor= "red"
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor= "blue"
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor= "orange"
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor= "purple"
    }


}
