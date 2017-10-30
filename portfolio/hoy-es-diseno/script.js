

$(".body-cargando").fadeOut(1, function () {
   $(".body-cargando").removeClass;
   
     if ($(window).width() < 960) {
       $("video").attr("controls","controls");

}
else {
           $("video").attr("autoplay","true");

    
}
    
    $(".container").css({
        "opacity": "1"
    });

 $("footer").css({
        "opacity": "1"
    });
    

    

    $("video").css({
                "opacity": "1"

    });
   
});



 $('.modal').modal();


function p1() {

    $("body").fadeOut(300, function () {

        window.location.href = 'index.html';

    });
}

function p2() {

    $("body").fadeOut(300, function () {
    
            
        window.location.href = 'historia.html';
    });
}

function p4() {

    $("body").fadeOut(300, function () {
        window.location.href = 'patrocinios.html';

    });
}

function p3() {

    $("body").fadeOut(300, function () {
        window.location.href = 'ponentes.html';

    });
}


function hoteles() {


    $("body").fadeOut(300, function () {
        window.location.href = 'hoteles.html';

    });
}

menuActivado = true;

if ($(window).width() < 575) {

}
else {
    menuActivado=false,
  $("#barraUno").css({
            "transform": "translateY(10px)rotate(-135deg)"
        });

        $("#barraDos").css({
            "opacity": "0",
            "transform": " rotate(-135deg)"
        });
        $("#barraTres").css({
            "transform": "translateY(-20px) rotate(135deg)"
        });

        $("#menu-contenido").css({
            "transform": " scaleX(1)"
        });
}


function activarMenu() {



    if (menuActivado) {
        $("#barraUno").css({
            "transform": "translateY(10px)rotate(-135deg)"
        });

        $("#barraDos").css({
            "opacity": "0",
            "transform": " rotate(-135deg)"
        });
        $("#barraTres").css({
            "transform": "translateY(-20px) rotate(135deg)"
        });

        $("#menu-contenido").css({
            "transform": " scaleX(1)"
        });

        menuActivado = false;
    } else

    if (menuActivado == false) {

        $("#barraUno").css({
            "transform": "translateY(0)rotate(0deg)"
        });

        $("#barraDos").css({
            "opacity": "1",
            "transform": " rotate(0deg)"
        });
        $("#barraTres").css({
            "transform": "translateY(0) rotate(0deg)"
        });
        $("#menu-contenido").css({
            "transform": " scaleX(0)"
        });
        menuActivado = true;
    }

}



var cambiar = false;


function cerrarPresentacion() {
    $("#videoP").fadeOut(500, function () {

        $("#videoP").attr("src", "");
        $("#videoP").fadeIn(1000);
    });
}



function onformative() {
    $("#videoP").fadeOut(500, function () {

        $("#videoP").attr("src", "https://www.youtube.com/embed/ml1Odthr830?autoplay=1");
        $("#videoP").fadeIn(1000);
    });
}


function cvivanco() {


    $("#videoP").fadeOut(500, function () {

        $("#videoP").attr("src", "https://www.youtube.com/embed/okHQ4Pq1aIY?autoplay=1");
        $("#videoP").fadeIn(1000);
    });



}

function leslava() {
    $("#videoP").fadeOut(500, function () {

        $("#videoP").attr("src", "https://www.youtube.com/embed/sT2N6DHwiQk?autoplay=1");
        $("#videoP").fadeIn(1000);
    });
}

function aramique() {
    $("#videoP").fadeOut(500, function () {

        $("#videoP").attr("src", "https://www.youtube.com/embed/yXYH4POdPQw?autoplay=1");
        $("#videoP").fadeIn(1000);
    });
}


function sbetancur() {
    $("#videoP").fadeOut(500, function () {

        $("#videoP").attr("src", "https://www.youtube.com/embed/zLBLbwAgZpE?autoplay=1");
        $("#videoP").fadeIn(1000);
    });
}

function konkretus() {
    $("#videoP").fadeOut(500, function () {

        $("#videoP").attr("src", "https://www.youtube.com/embed/iv79XoEuEos?autoplay=1");
        $("#videoP").fadeIn(1000);
    });
}



$(".mapa").hover(
    function () {

        $(".mapa-2").css({
            "transform": "scale(1)"
        });
    }
);


$("section").hover(
    function () {

        $(".mapa-2").css({
            "transform": "scale(0)"
        });
    }
);

var mapaOn = true;

function mapa() {

    mapaOn = !mapaOn;
    if (mapaOn == false) {
        $(".mapa-2").css({
            "transform": "scale(1)"
        });

    }


    if (mapaOn == true) {
        $(".mapa-2").css({
            "transform": "scale(0)"
        });
    }



}
