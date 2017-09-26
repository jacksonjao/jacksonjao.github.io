var cantidadDeSecciones = 5;
var seccion = 0;
var altoPantalla = $(window).height() / cantidadDeSecciones;
var greenColor = "#97c03d";
var whiteColor = "#fff"
const GREENCOLOR = "#97c03d";
const WHITECOLOR = "#fff";
var ancho = $(window).width();

$("#b" + seccion).css({
    'background-color': greenColor,
    'border-color': greenColor
});

var iconosCode = ["img/icon-java.svg", "img/icon-csharp.svg", "img/icon-python.svg", "img/icon-mysql.svg", "img/icon-unity.svg", "img/icon-android.svg", "img/icon-nodejs.svg", "img/icon-html.svg", "img/icon-css.svg", "img/icon-javascript.svg", "img/icon-arduino.svg"];

var iconosUxUi = ["img/icon-photoshop.svg", "img/icon-illustrator.svg", "img/icon-xd.svg", "img/icon-invision.svg", "img/icon-marvel.svg", "img/icon-balsamiq.svg"];

var iconosPersonal = ["img/icon-photoshop.svg", "img/icon-illustrator.svg", "img/icon-xd.svg", "img/icon-invision.svg", "img/icon-marvel.svg", "img/icon-balsamiq.svg"];

var textCode = [];
for (var i = 0; i < iconosCode.length; i++) {
    textCode.push(iconosCode[i].split("-")[1].split(".")[0]);
};

var textUxUi = [];
for (var i = 0; i < iconosUxUi.length; i++) {
    textUxUi.push(iconosUxUi[i].split("-")[1].split(".")[0]);
};

var textPersonal = [];
for (var i = 0; i < iconosPersonal.length; i++) {
    textPersonal.push(iconosPersonal[i].split("-")[1].split(".")[0]);
};



for (var i = 0; i < iconosCode.length; i++) {
    $(".contenedor-icon-code").append("<div class='chip'</div>");
}

for (var i = 0; i < iconosUxUi.length; i++) {
    $(".contenedor-icon-uxui").append("<div class='chip'</div>");
}

for (var i = 0; i < iconosPersonal.length; i++) {
    $(".contenedor-icon-personal").append("<div class='chip'</div>");
}



$(".contenedor-icon-code>.chip").each(function (i) {
    $(this).append("<img src=" + iconosCode[i] + ">" + textCode[i]);
});

$(".contenedor-icon-uxui>.chip").each(function (i) {
    $(this).append("<img src=" + iconosUxUi[i] + ">" + textUxUi[i]);
});


$(".contenedor-icon-personal>.chip").each(function (i) {
    $(this).append("<img src=" + iconosPersonal[i] + ">" + textPersonal[i]);
});


var altoContenedorIconCode = $(".contenedor-icon-code").height() * -1;

var marginContenedorIconCode = "0em";

if (ancho > 992) {
    marginContenedorIconCode = "1em";
} else {
    marginContenedorIconCode = "-2em";
}




/*-----Scroll----*/
$(function () {
    $('a[href*=#]').click(function () {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({
                    scrollTop: targetOffset
                }, 1000);

                return false;

            }


        }

    });

});



/* ---- particles.js config ---- */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 50,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 0.8
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 100
            }
        }
    },
    "retina_detect": true
});


/* ---- Evaluaciones con el scroll ---- */
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    // Do something


    for (var i = 0; i < cantidadDeSecciones; i++) {



        if (scroll >= ((altoPantalla * i) - altoPantalla / 2)) {


            seccion = i;



            if (seccion % 2 == 0) {
                whiteColor = "#fff"
            } else {
                whiteColor = "#000"
            }

            $("#b" + seccion).css({
                'background-color': greenColor,
                'border-color': greenColor
            });



            $("#b" + seccion).mouseout(function () {
                $(this).css({
                    'background-color': greenColor,
                    'border-color': greenColor
                });
            });



            $("#b" + seccion).mouseover(function () {
                $(this).css({
                    'background-color': greenColor,
                    'border-color': greenColor
                });
            });




            for (var j = 0; j < cantidadDeSecciones; j++) {

                if (seccion != j) {

                    $("#b" + j).css({
                        'background-color': 'transparent',
                        'border-color': whiteColor
                    });

                    $("#b" + j).mouseout(function () {
                        $(this).css({
                            'background-color': 'transparent',
                            'border-color': whiteColor
                        });
                    });

                    $("#b" + j).mouseover(function () {
                        $(this).css({
                            'background-color': whiteColor,
                            'border-color': whiteColor
                        });
                    });
                }
            }


        }

    }







});



/* ---- Evaluaciones con el click de los botones ---- */

for (var i = 0; i < cantidadDeSecciones; i++) {

    $("#b" + i).click(function () {

        if (seccion % 2 == 0) {
            whiteColor = "#fff"
        } else {
            whiteColor = "#000"
        }

        for (var j = 0; j < cantidadDeSecciones; j++) {

            if (this.id.split("b")[1] != j) {

                $("#b" + j).css({
                    'background-color': 'transparent',
                    'border-color': whiteColor
                });

                $("#b" + j).mouseout(function () {
                    $(this).css({
                        'background-color': 'transparent',
                        'border-color': whiteColor
                    });
                });

                $("#b" + j).mouseover(function () {
                    $(this).css({
                        'background-color': whiteColor,
                        'border-color': whiteColor
                    });
                });
            }
        }

        $(this).mouseout(function () {
            $(this).css({
                'background-color': greenColor,
                'border-color': greenColor
            });
        });



        $(this).mouseover(function () {
            $(this).css({
                'background-color': greenColor,
                'border-color': greenColor
            });
        });


        $(this).css({
            'background-color': greenColor,
            'border-color': greenColor
        });

    });
}


//inicia con opacidad
$("#home").animate({
    opacity: 1,

}, 1500, function () {

    setTimeout(
        function () {
            $(".logo-tres").css({
                'transition': '1s',
                'transform': 'translate(0em,0em) rotate(-0deg)',
                'background-position': 'left'
            });

        }, 1000);


    setTimeout(
        function () {
            $(".logo-dos").css({
                'transform': 'translateX(0)',
                'opacity': '1'
            });

        }, 2000);

    setTimeout(
        function () {
            $(".logo-cuatro").css({
                'transform': 'translateX(0)',
                'opacity': '1'
            });
        }, 3000);

    setTimeout(
        function () {

            showText(".introduccion", intro, 0, 60);
        }, 4000);

    setTimeout(
        function () {
            $(".rect-see-my-work").css({
                'opacity': '1'
            });

        }, 8000);


});


//metodo de texto letra por letra
var intro = "/*Hi, \n I’m Jhon Osorio \n Interactive Media Designer*/";
var showText = function (target, message, index, interval) {
    if (index < message.length) {
        if (message[index] == ('\n')) {
            $(target).append('<br>');
        }
        $(target).append(message[index++]);
        setTimeout(function () {
            showText(target, message, index, interval);
        }, interval);
    }
}




var skillActivado = [false, false, false];




$(".skill-titulo").each(function (i) {

    $(this).click(function () {
        if (!skillActivado[i]) {
            skillActivado[i] = true;
            $(this).css({
                "transform": "translateY(" + altoContenedorIconCode + "px)",
                "margin": "inherit",
            });



            $($(".contenedor-icon")[i]).css({
                "opacity": "1",
                "transform": "translateY(" + marginContenedorIconCode + ")",

            });

            $("." + $(".contenedor-icon")[i].classList[1] + ">.chip").each(function (j) {

                setTimeout(
                    function () {
                        $($("." + $(".contenedor-icon")[i].classList[1] + ">.chip")[j]).animate({
                            opacity: 1,

                        }, 0)
                    }, 200*j);


            })


            for (var l = 0; l < $(".skill-titulo").length; l++) {
                if (this != $(".skill-titulo")[j]) {
                    skillActivado[j] = false;
                    $($(".skill-titulo")[j]).css({
                        "position": "absolute",
                        "transform": "translateY(-50%)",
                        "top": "50%",
                        "margin": "auto"
                    });
                }
            }


        } else if (skillActivado[i]) {
            skillActivado[i] = false;
            $(this).css({
                "position": "absolute",
                "transform": "translateY(-50%)",
                "top": "50%",
                "margin": "auto"
            });

            $("." + $(".contenedor-icon")[i].classList[1] + ">.chip").css({
                "opacity": "0"
            });

            $($(".contenedor-icon")[i]).css({
                "opacity": "0",
                "transform": "translateY(-50%)",
            });

        }

        for (var j = 0; j < $(".skill-titulo").length; j++) {
            if (this != $(".skill-titulo")[j]) {
                skillActivado[j] = false;
                $($(".skill-titulo")[j]).css({
                    "position": "absolute",
                    "transform": "translateY(-50%)",
                    "top": "50%",
                    "margin": "auto"
                });



                $("." + $(".contenedor-icon")[j].classList[1] + ">.chip").css({
                    "opacity": "0"
                });

                $($(".contenedor-icon")[j]).css({
                    "opacity": "0",
                    "transform": "translateY(-50%)",
                });
            }
        }


    })
})





$(".skill-titulo").each(function (i) {

    $(this).click(function () {



        if (skillActivado[i]) {

        } else {



        }



    })

});


/*

$(".skill-titulo").click(function(){
 if(skillActivado[0]){
       $(".contenedor-icon-code").css({
          "opacity":"1",
            "transform": "translateY("+marginContenedorIconCode+")",
           
      });
     
    $(".chip").each(function(i){
        
    setTimeout(
        function () {
$($(".chip")[i]).animate({
    opacity: 1,
    
}, 0)
        }, 100*i);
    
    
})}else{
     
      $(".chip").css({
          "opacity":"0"
           
      });
        
        $(".contenedor-icon-code").css({
          "opacity":"0",
            "transform": "translateY(-50%)",
      });
    }
    
    
    
})



*/


if (ancho <= 600) {

    $(".skill-titulo").each(function (i) {

        $(this).click(function () {

            if (skillActivado[i]) {
                $(this).css({
                    "font-size": "2em",
                    "transform": "translateY(-50%)",
                    "opacity": "0"
                })

                $(".contenedor-icon-code").css({
                    "transform": "translateY(-50%)",
                });
            } else if (!skillActivado[i]) {
                $(this).css({
                    "font-size": "4em",
                    "opacity": "1"
                });

                $(".contenedor-icon-code").css({
                    "transform": "translateY(-50%)",
                });
            }

            for (var j = 0; j < $(".skill-titulo").length; j++) {
                if (this != $(".skill-titulo")[j]) {

                    $($(".skill-titulo")[j]).css({
                        "font-size": "4em",
                        "opacity": "1",
                    });
                }
            }


        })
    })
}








$(".learn-more>a>p").mouseover(function () {
    $(".learn-more>a>p").css("color", GREENCOLOR);

    $(".home-icon-down>a>i").css("color", GREENCOLOR);
});

$(".learn-more").mouseout(function () {
    $(".learn-more>a>p").css("color", WHITECOLOR);

    $(".home-icon-down>a>i").css("color", WHITECOLOR);
});


$(".home-icon-down>a>i").mouseover(function () {
    $(".learn-more>a>p").css("color", GREENCOLOR);

    $(".home-icon-down>a>i").css("color", GREENCOLOR);
});

$(".home-icon-down>a>i").mouseout(function () {
    $(".learn-more>a>p").css("color", WHITECOLOR);

    $(".home-icon-down>a>i").css("color", WHITECOLOR);
});
