var gameState = 0,playerCount,form,game,player;
var allplayers;
var database

function setup(){
    database = firebase.database();
    createCanvas(500,500);
game = new Game();
game.getState();
game.start();

}

function draw(){
if(playerCount === 4){
game.update(1)
}
if(gameState === 1){
 game.play()
}
}