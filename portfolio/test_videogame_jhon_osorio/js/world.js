class World {

    constructor(app, context) {
        this.platforms = [];
        this.enemies = [];
        this.boss = Jugador;
        this.bossVelocity = 0.7;
        this.cameraMov = 0;
        this.posCameraX = 0;
        this.penance = 0;
        this.platformFire = PlatformFire;
        this.isRigth = false;
        this.isLeft = false;
        this.app = app;
        this.context = context;
        this.width = window.innerWidth;
        this.height = app.canvas.height;
        this.bottomPos = this.height;
        this.platforms.push(new Platform(0, this.bottomPos - 100, 400, 100, context));
        this.platforms.push(new Platform(335, this.bottomPos - 186, 100, 50, context));
        this.platforms.push(new Platform(512, this.bottomPos - 256, 100, 50, context));
        this.platforms.push(new Platform(350, this.bottomPos - 356, 100, 50, context));
        this.platforms.push(new Platform(212, this.bottomPos - 456, 100, 50, context));
        this.platforms.push(new Platform(350, this.bottomPos - 556, 800, 50, context));
        this.platforms.push(new Platform(1150, this.bottomPos - 100, 1200, 100, context));
        this.platforms.push(new Platform(1000, this.bottomPos - 190, 100, 50, context));
        this.platforms.push(new Platform(1150, this.bottomPos - 290, 100, 50, context));
        this.platforms.push(new Platform(1350, this.bottomPos - 256, 200, 50, context));
        this.platforms.push(new Platform(1650, this.bottomPos - 256, 100, 50, context));
        this.platforms.push(new Platform(1890, this.bottomPos - 256, 300, 50, context));
        this.platforms.push(new Platform(2480, this.bottomPos - 100, 1500, 100, context));
        this.platformFire = new PlatformFire(1600, this.bottomPos - 100, 650, 10, "black", context);
        this.enemies.push(new Enemy(350, this.bottomPos - 556 - 30, 30, 30, "red", context, 350, 350 + 800));
        this.enemies.push(new Enemy(1890, this.bottomPos - 256 - 30, 30, 30, "red", context, 1890, 1890 + 300));
        this.enemies.push(new Enemy(2480, this.bottomPos - 100 - 30, 30, 30, "red", context, 2480, 2480 + 1500));
        this.boss = new Jugador(30, 30, 30, 30, "black", context);
        this.boss.setVelocity(this.bossVelocity);
        this.jugador = new Jugador(30, 30, 30, 30, "rgb(246, 255, 100)", context);
    }

    draw() {
        this.generalBehaviors(this.app, this.jugador, this.enemies, this.boss, this.platforms, this.platformFire, this.penance);
        this.bossBehaviors(this.app, this.jugador, this.boss, this.bossVelocity, this.platforms);
        this.cameraMovenment(this.posCameraX, this.cameraMov, this.jugador, this.boss, this.platformFire, this.width);

        for (let platform of this.platforms) {
            platform.draw();
            platform.cameraMov = this.cameraMov;
        }

        for (let enemie of this.enemies) {
            enemie.draw();
            enemie.cameraMov = this.cameraMov;
        }

        this.boss.draw();
        this.jugador.draw();
        this.platformFire.draw();
    }

    generalBehaviors(GAME, jugador, enemies, boss, platforms, platformFire, penance) {
        if (penance > 0) {
            penance--;
            if (penance < 2) {
                penance = 0;
                jugador.color = "rgb(246, 255, 100)"
            }
        }
        //observa que el jugador esté sobre las superficies
        for (var i = 0; i < platforms.length; i++) {
            if (jugador.y + jugador.height > platforms[i].y && jugador.y + jugador.height < platforms[i].y + 10 && jugador.x + jugador.width > platforms[i].x && jugador.x < platforms[i].x + platforms[i].width) {
                jugador.isFalling = false;
                break;
            } else {
                jugador.isFalling = true;
            }
        }

//evalúa la posición de la bala del jugador
        for (var i = 0; i < jugador.bullets.length; i++) {

            for (var j = 0; j < enemies.length; j++) {
                try {
                    if (jugador.bullets[i].x < enemies[j].x + enemies[j].width && jugador.bullets[i].x > enemies[j].x && jugador.bullets[i].y > enemies[j].y - (jugador.bullets[i].height / 2) && jugador.bullets[i].y < enemies[j].y + enemies[j].height) {
                        jugador.bullets.splice(i, 1);
                        enemies.splice(j, 1);
                    }
                } catch (e) {

                }


            }
        }


        for (var i = 0; i < enemies.length; i++) {
            if (enemies[i].x < jugador.x + jugador.width && enemies[i].x > jugador.x && enemies[i].y > jugador.y - (enemies[i].height / 2) && enemies[i].y < jugador.y + jugador.height) {

                penance = 200;
                jugador.setVelocity(0);
                jugador.color = "rgb(246, 255, 100,0.2)"
            }

            for (var j = 0; j < enemies[i].bullets.length; j++) {
                try {
                    if (enemies[i].bullets[j].x < jugador.x + jugador.width && enemies[i].bullets[j].x > jugador.x && enemies[i].bullets[j].y > jugador.y - (enemies[i].bullets[j].height / 2) && enemies[i].bullets[j].y < jugador.y + jugador.height) {
                        enemies[i].bullets.splice(i, 1);
                        penance = 200;
                        jugador.setVelocity(0);
                        jugador.color = "rgb(246, 255, 100,0.2)"
                    }
                } catch (e) {

                }


            }
        }

        if (jugador.x > platformFire.x && jugador.x < platformFire.x + platformFire.width) {
            if (jugador.y + jugador.height >= platformFire.y && jugador.y + jugador.height < platformFire.y + 10) {
                jugador.setVelocity(jugador.backupDirection * 0.2);
            }

        }

        if (jugador.y > this.height) {
            GAME.finish();
            document.getElementById("tittle").innerHTML = "PERDISTE LA CARRERA";
            jugador.setVelocity(0);
            jugador.y = 0;
            boss.setVelocity(0);
        }

        if (jugador.x > platforms[platforms.length - 1].x + platforms[platforms.length - 1].width - 200) {

            GAME.finish();
            document.getElementById("tittle").innerHTML = "GANASTE LA CARRERA";
            boss.setVelocity(0);
            jugador.setVelocity(0);
            boss.x = 0;

        }
        this.penance = penance;
    }

    bossBehaviors(GAME, jugador, boss, bossVelocity, platforms) {
        for (var i = 0; i < platforms.length; i++) {
            if (boss.y + boss.height > platforms[i].y && boss.y + boss.height < platforms[i].y + 10 && boss.x + boss.width > platforms[i].x && boss.x < platforms[i].x + platforms[i].width) {
                boss.isFalling = false;
                break;
            } else {
                boss.isFalling = true;
            }
        }


        if (boss.isJumping) {
            boss.setVelocity(bossVelocity * 1.8);
        } else {
            boss.setVelocity(bossVelocity);
        }

        if (boss.x > platforms[1].x - 30 && boss.x < platforms[1].x + 30 && boss.y + boss.height >= platforms[0].y && boss.y + boss.height < platforms[0].y + 10) {

            boss.setGravityJump(3.3);
        }


        if (boss.x > platforms[1].x + 30 && boss.x < platforms[1].x + platforms[1].width && boss.y + boss.height >= platforms[1].y && boss.y + boss.height < platforms[1].y + 10) {
            boss.setGravityJump(3.3);
        }

        if (boss.x > platforms[2].x + 10 && boss.x < platforms[2].x + platforms[2].width - 30 && boss.y + boss.height >= platforms[2].y && boss.y + boss.height < platforms[2].y + 10) {
            bossVelocity = bossVelocity * -1;
            boss.setGravityJump(3.3);
        }

        if (boss.x < platforms[3].x + 30 && boss.y + boss.height >= platforms[3].y && boss.y + boss.height < platforms[3].y + 10) {

            boss.setGravityJump(3.3);
        }

        if (boss.x > platforms[4].x && boss.x < platforms[4].x + platforms[4].width - 30 && boss.y + boss.height >= platforms[4].y && boss.y + boss.height < platforms[4].y + 10) {
            bossVelocity = bossVelocity * -1;
            boss.setGravityJump(3.3);
        }

        if (boss.x > platforms[6].x + platforms[6].width - 10 && boss.x < platforms[6].x + platforms[6].width + 10 && boss.y + boss.height >= platforms[6].y && boss.y + boss.height < platforms[6].y + 10) {

            boss.setGravityJump(3.3);
        }


        if (boss.x > platforms[platforms.length - 1].x + platforms[platforms.length - 1].width - 200) {

            GAME.finish();
            document.getElementById("tittle").innerHTML = "PERDISTE LA CARRERA";
            jugador.setVelocity(0);
            jugador.y = 0;
            boss.setVelocity(0);
        }

        this.bossVelocity = bossVelocity;
    }

    cameraMovenment(posCameraX, cameraMov, jugador, boss, platformFire, width) {
        posCameraX += cameraMov;

        if (jugador.x > width - width / 2) {
            cameraMov = -1;
        }
        if (jugador.x <= width - width / 2 && jugador.x >= 20) {
            cameraMov = 0;
        }
        if (jugador.x < width - ((width / 2) + width / 4) && posCameraX <= 0) {
            cameraMov = 1;
        }
        jugador.cameraMov = cameraMov;
        boss.cameraMov = cameraMov;
        platformFire.cameraMov = cameraMov;
        this.cameraMov = cameraMov;
        this.posCameraX = posCameraX;
    }

    keyBoard(key, event) {
        switch (key) {
            case 'keydown':
                if (this.penance === 0) {
                    switch (event.key) {
                        case 'd':
                        case 'D':
                        case 'ArrowRight':
                            this.jugador.setVelocity(1);
                            this.isRigth = true;
                            break;
                        case 'a':
                        case 'A':
                        case 'ArrowLeft':
                            this.jugador.setVelocity(-1);
                            this.isLeft = true;
                            break;
                        case 'w':
                        case 'W':
                        case 'ArrowUp':
                            this.jugador.setGravityJump(3.3);
                            break;
                        case 'd':
                        case 'D':
                        case 'ArrowDown':
                            break;

                        case ' ':
                            this.jugador.fire();
                            break;
                    }
                }
                break;

            case 'keyup':
                switch (event.key) {
                    case 'd':
                    case 'D':
                    case 'ArrowRight':
                        this.isRigth = false;
                        if (this.isLeft == false) {
                            this.cameraMov = 0;
                            this.jugador.setVelocity(0);
                        }
                        break;
                    case 'a':
                    case 'A':
                    case 'ArrowLeft':
                        this.isLeft = false;
                        if (this.isRigth == false) {
                            this.cameraMov = 0;
                            this.jugador.setVelocity(0);
                        }
                        break;
                    case 'u':
                    case 'U':
                    case 'ArrowUp':
                        break;
                    case 'd':
                    case 'D':
                    case 'ArrowDown':
                        break;

                    case ' ':
                        break;
                }
                break;
        }

    }

    buttons(key, value) {
        switch (key) {
            case 'left':
                this.jugador.setVelocity(value);
                break;
            case 'right':
                this.jugador.setVelocity(value);
                break;
            case 'jump':
                this.jugador.setGravityJump(3.3);
                break;
            case 'fire':
                this.jugador.fire();
                break;
        }
    }
}


var btnNewGame = document.getElementById("newGame");


window.onmousedown = function (event) {
    if (event.target === btnNewGame) {
        location.reload();
    }
}




