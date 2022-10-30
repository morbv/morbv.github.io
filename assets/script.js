var messageBox = document.querySelector('.js-message');

var btn = document.querySelector('.js-message-btn');

var card = document.querySelector('.js-profile-card');

var closeBtn = document.querySelectorAll('.js-message-close');

btn.addEventListener('click',function (e) {

    e.preventDefault();

    card.classList.add('active');

});

closeBtn.forEach(function (element, index) {

    console.log(element);

    element.addEventListener('click',function (e) {

        e.preventDefault();

        card.classList.remove('active');

    });

});

  // Movements of eyes

var  eye = document.getElementsByClassName("eye-green");
document.onmousemove = function() {
var width = window.innerWidth;
var x = event.clientX;
  var a = (x / width + 1) * 0.4 ;
  a = a * 100;
var height = window.innerHeight;
var y = event.clientY;
  var b = (y / height + 0.4) * 0.5;
  b = b * 100;
eye[0].style.cssText = "left: " + a + "%; top: " + b  + "%;";
eye[1].style.cssText = "left: " + a + "%; top: " + b + "%;"; 
}

// Dust particles

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
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
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0.2,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 4,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 1,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
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
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
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
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });