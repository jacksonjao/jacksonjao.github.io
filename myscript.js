

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


/* ---- stats.js config ---- 

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

*/




/*
var img = document.getElementById('.contenedor-logo-home'); 
//or however you get a handle to the IMG
var width = img.clientWidth;
var height = img.clientHeight;



function button() {
  
    
     $(".logo-uno").css('transform', 'translateX(0)')
    
    $(".logo-dos").css('transform', 'translateX(0)');
 
}
*/
$("#home").animate({
    opacity:1,
},1000,function(){
    
setTimeout(
  function() 
  {
      
         $(".logo-tres").css({'transition':'0.5s','transform':'translate(-1em,-0.5em) rotate(180deg)'});

  }, 200);
    
    
setTimeout(
  function() 
  {
         $(".logo-tres").css({'transition':'1s','transform':'translateX(0) rotate(-0deg)','background-position':'left'});

  }, 1000);


setTimeout(
  function() 
  {
         $(".logo-dos").css({'transform':'translateX(0)','opacity':'1'});

  }, 2000);

 setTimeout(
  function() 
  {
         $(".logo-cuatro").css({'transform':'translateX(0)','opacity':'1'});
  }, 3000);
    
     setTimeout(
  function() 
  {
  
      showText(".introduccion",intro,0,100);
  }, 4000);
    
    
});


//metodo de texto letra por letra
var intro = "/*Hi, \n I’m Jhon Osorio \n Interactive Media Designer*/";
var showText = function (target, message, index, interval) {   
  if (index < message.length) {
      if(message[index]==('\n')){
         $(target).append('<br>');
         }
      $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}




var greenColor = "#97c03d";



$(".learn-more").mouseover(function () {
    $(".learn-more").css("color", "#97c03d");

    $(".home-icon-down>a>i").css("color", "#97c03d");
});

$(".learn-more").mouseout(function () {
    $(".learn-more").css("color", "white");

    $(".home-icon-down>a>i").css("color", "white");
});


$(".home-icon-down>a>i").mouseover(function () {
    $(".learn-more").css("color", "#97c03d");

    $(".home-icon-down>a>i").css("color", "#97c03d");
});

$(".home-icon-down>a>i").mouseout(function () {
    $(".learn-more").css("color", "white");

    $(".home-icon-down>a>i").css("color", "white");
});
