var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;




function setup(){
createCanvas(400,400)
database= firebase.database()
game=new Game ()
game.getState()
game.start()




}


function draw(){
if(playerCount===2){
    game.update(1)
}
if(gameState===1){
    game.play()
}



}
