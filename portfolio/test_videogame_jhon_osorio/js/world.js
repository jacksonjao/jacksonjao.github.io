import Jugador from "./jugador.js";
import Platform from "./platform.js";
import Enemy from "./enemy.js";


var jugador= Jugador;
var platforms=[];
var startMovement=false;
var enemies=[];
initWorld();

function initWorld() {
    var bottomPos=height;
    platforms.push(new Platform(0,bottomPos-100,400,100,GAME.context));
    platforms.push(new Platform(335,bottomPos-186,100,50,GAME.context));
    platforms.push(new Platform(512,bottomPos-256,100,50,GAME.context));
    platforms.push(new Platform(350,bottomPos-356,100,50,GAME.context));
    platforms.push(new Platform(212,bottomPos-456,100,50,GAME.context));
    platforms.push(new Platform(350,bottomPos-556,800,50,GAME.context));
    enemies.push(new Enemy(350, bottomPos-356-30,  30, 30,"red",GAME.context))



    jugador= new Jugador(10, 30,  30, 30,"gray",GAME.context);



    setInterval(draw,1);
}



function draw() {
    GAME.clear();
    behaviors();

    for(var i=0;i<platforms.length;i++){
    platforms[i].draw();
    cameraMovenment(i);
    }

    for (var i=0;i<enemies.length;i++){
        enemies[i].draw();
    }

    jugador.draw();
}



function cameraMovenment(i) {
    if(jugador.x>width-(width/2)){
        startMovement=true;
    }
    if(startMovement){
       /// platforms[i].x-=0.2;
    }

}

function behaviors(){
    //observa que el jugador esté sobre las superficies
    for(var i=0;i<platforms.length;i++){
        if(jugador.y+jugador.height>platforms[i].y&&jugador.y+jugador.height<platforms[i].y+10&&jugador.x+jugador.width>platforms[i].x&&jugador.x<platforms[i].x+platforms[i].width){
            jugador.isFalling=false;
            break;
        }else{
            jugador.isFalling=true;
        }



    }


    for(var i=0;i<jugador.bullets.length;i++){

        for(var j=0;j<enemies.length;j++){
            if(jugador.bullets[i].x<enemies[j].x+enemies[j].width&&jugador.bullets[i].x>enemies[j].x&&jugador.bullets[i].y>enemies[j].y-(jugador.bullets[i].height/2)&&jugador.bullets[i].y<enemies[j].y+enemies[j].height){

                jugador.bullets.splice(i,1);
                enemies.splice(j,1);
            }

        }
    }







}

keyBoard();
function keyBoard(){
    document.addEventListener('keydown', function(event) {

        switch (event.key){
            case 'd':
            case 'D':
            case 'ArrowRight':
                jugador.setVelocity(1);
                break;
            case 'a':
            case 'A':
            case 'ArrowLeft':
                jugador.setVelocity(-1);
                break;
            case 'w':
            case 'W':
            case 'ArrowUp':
                jugador.setGravityJump(3.3);
                break;
            case 'd':
            case 'D':
            case 'ArrowDown':
                console.log('Down was pressed');
                break;

            case ' ':

                jugador.fire();
                console.log('Space was pressed');
                break;
        }

    });

    document.addEventListener('keyup', function(event) {

        switch (event.key){
            case 'd':
            case 'D':
            case 'ArrowRight':
                jugador.setVelocity(0);
                break;
            case 'a':
            case 'A':
            case 'ArrowLeft':
                jugador.setVelocity(0);
                break;
            case 'u':
            case 'U':
            case 'ArrowUp':
                console.log('Up was up');
                break;
            case 'd':
            case 'D':
            case 'ArrowDown':
                console.log('Down was up');
                break;

            case ' ':
                console.log('Space was up');
                break;
        }

    });
}


