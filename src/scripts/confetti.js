function startConfetti(){
  for (var i = 0; i < 250; i++) {
    create(i);
  }
}


function create(i) {
  var width = Math.random() * 8;
  var height = width * 0.4;
  var colourIdx = Math.ceil(Math.random() * 3);
  var colour = "red";
  switch (colourIdx) {
    case 1:
      colour = "yellow";
      break;
    case 2:
      colour = "blue";
      break;
    default:
      colour = "red";
  }
  
  
  /*var className = `confetti-${i}`;
  var width = `${width} px`;
  var height = `${height} px`;
  var top = `${-Math.random() * 20} %`;
  var left = `${-Math.random() * 100} %`;
  var opacity = Math.random() + 0.5;
  var transform = `rotate(${Math.random() * 360} deg)`;


  var confettiEl = document.createElement('div');
  confettiEl.setAttribute('class', className);
  confettiEl.setAttribute('width', width);
  confettiEl.setAttribute('height', height);
  confettiEl.setAttribute('top', top);
  confettiEl.setAttribute('left', left);
  confettiEl.setAttribute('opacity', opacity);
  confettiEl.setAttribute('transform', transform);

  var confettiWrapper = document.querySelector('.wrapper');
  confettiWrapper.appendChild(confettiEl);*/

  $('<div class="confetti-' + i + " " + colour + ' confetti"></div>')
    .css({
      width: width + "px",
      height: height + "px",
      top: -Math.random() * 20 + "%",
      left: Math.random() * 100 + "%",
      opacity: Math.random() + 0.5,
      transform: "rotate(" + Math.random() * 360 + "deg)"
    })
    .appendTo(".wrapper");

  drop(i);
}

function drop(x) {
  
  /*var confettiEl = document.querySelector('.confetti-'+x);
  confettiEl.animate([
    {
      top: topFrom,
      left: leftFrom
    },
    {
      top: '100%',
      left: `${Math.random() * 15} %`
    }],
    Math.random() * 3000 + 3000
    function() {
      restart(x);
    }
  );*/

  $(".confetti-" + x).animate(
    {
      top: "100%",
      left: "+=" + Math.random() * 15 + "%"
    },
    Math.random() * 3000 + 3000
    // function() {
    //   restart(x);
    // }
  );
}

/*function restart(x) {
  var confettiEl = document.querySelector('.confetti-'+x);
  confettiEl.animate(
    {
      top: -Math.random() * 20 + "%",
      left: "-=" + Math.random() * 15 + "%"
    },
    0,
    function() {
      drop(x);
    } 
  );



  $(".confetti-" + x).animate(
    {
      top: -Math.random() * 20 + "%",
      left: "-=" + Math.random() * 15 + "%"
    },
    0,
    function() {
      drop(x);
    }
  );
}*/

function cleanConfetti(){
  let confetti = document.querySelectorAll('.confetti');
  confetti.forEach(el => el.remove());
}