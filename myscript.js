var cantidadDeSecciones = 5;
var seccion = 0;
var altoPantalla = $(window).height() / cantidadDeSecciones;
var greenColor = "#97c03d";
var whiteColor = "#fff"
var GREENCOLOR = "#97c03d";
var WHITECOLOR = "#fff";
var ancho = $(window).width();

$("#b" + seccion).css({
    'background-color': greenColor,
    'border-color': greenColor
});



/*-----Scroll----*/
$(document).ready(function () {
    $('a[rel="relativeanchor"]').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});









var iconosCode = ["img/icon-java.svg", "img/icon-android.svg", "img/icon-html.svg", "img/icon-css.svg", "img/icon-javascript.svg", "img/icon-nodejs.svg", "img/icon-csharp.svg", "img/icon-python.svg", "img/icon-mysql.svg", "img/icon-unity.svg", "img/icon-arduino.svg"];

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



//estos no los hice por arreglos porque me era mas fácil sin partir los nombres
var stringsPersonal = ["icon-team-working.svg", "icon-working-unde-the-preassure.svg", "icon-perseverance.svg", "icon-perfectionism.svg", "icon-autonomous-learning.svg", "icon-proactivity.svg"
];

stringsPersonal.sort(function (a, b) {
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return b.length - a.length;
});


var textPersonal = [];
for (var i = 0; i < iconosPersonal.length; i++) {
    textPersonal.push("");
    /*
      textPersonal.push(stringsPersonal[i].split("-")[1].split(".")[0]);
   */

    for (var j = 1; j < stringsPersonal[i].split("-").length; j++) {

        textPersonal[i] += stringsPersonal[i].split("-")[j].split(".")[0] + " ";

    }

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


var altoContenedorIconCode = (210) * -1;

var marginContenedorIconCode = "0em";

if (ancho > 992) {
    marginContenedorIconCode = "-2em";
} else {
    marginContenedorIconCode = "-2em";
}






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


//inicia con opacidad y animación del logo

$("#home").animate({
    opacity: 1,

}, 500, function () {

    setTimeout(
        function () {
            $(".logo-uno").css({
                'padding': '0',
                'opacity': '1'
            })

        }, 0);



    setTimeout(
        function () {
            $(".logo-tres").css({
                'transition': '1s',
                'transform': 'translate(0em,0em) rotate(-0deg)',
                'opacity': '1',
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
};




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
                    }, 200 * j);


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
});




var skillsResponsive= function(ancho){
    
    if (ancho <= 992) {
        $(".skill-titulo").each(function (i) {
            $(this).click(function () {
                if (skillActivado[i]) {
                    $(this).css({
                        "font-size": "2em",
                        "transform": "translateY(-50%)",
                        "opacity": "0"
                    })
                    $(".contenedor-icon").css({
                        "transform": "translateY(-50%)",
                    });
                } else if (!skillActivado[i]) {
                    $(this).css({
                        "font-size": "4em",
                        "opacity": "1"
                    });
                    $(".contenedor-icon").css({
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
    };
}


  skillsResponsive(ancho);



//section my work


var covers = ["url(img/cover-app-hed.jpg)", "url(img/cover-app-tonelist.png)", "url(img/cover-desktop-pixel.png)", "url(img/cover-app-topotapp.png)"]

var numX=2;
var numY=2;
var anchoTrabajos=ancho;
var altoTrabajos=$("#my-work").height();


$(".trabajo").each(function (i) {
    $(this).css({
        'background-image': covers[i],
        'width':anchoTrabajos/numX,
        'height':altoTrabajos/numY
    });
    
});

var trabajoResponsive= function(ancho,alto,numX,numY){
    $(".trabajo").each(function (i) {
    $(this).css({
        'width':ancho/numX,
        'height':alto/numY
    });
});
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


if(ancho<=600){
    alto=$("#my-work").height();
    trabajoResponsive(ancho,alto,1,4);   
}


//aquí van los que necesitan ser redimensionados
$(window).resize(function () {
    ancho = $(window).width();
    alto=$("#my-work").height();
    skillsResponsive(ancho);
   
    if(ancho>600){
        trabajoResponsive(ancho,alto,2,2);} 
    else{
       trabajoResponsive(ancho,alto,1,4);
    }

    
});