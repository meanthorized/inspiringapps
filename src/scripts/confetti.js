export let Confetti = (function(){

  let confettiNumber;
  let confettiWrapperName;

  const startConfetti = (confettiWrapperClassName, confettiNumber = 250) => {
    confettiNumber = confettiNumber;
    if(!confettiWrapperClassName){
      confettiWrapperName = 'body';
    }
    else{
      confettiWrapperName = `.${confettiWrapperClassName}`;
    }

    for(let i = 0; i < confettiNumber; i++){
      createConffeti(i);
    }

  };

  const createConffeti = i => {
    let width = Math.random() * 8;
    let height = width * 0.4;
    let colorId = Math.ceil(Math.random() * 3);
    let color;
    switch (colorId) {
      case 1: 
        color = "yellow";
        break;
      case 2: 
        color = "blue";
        break;
      default: 
        color = "red";
    }

    $('<div class="confetti-' + i + " " + color + ' confetti"></div>')
      .css({
        width: width + "px",
        height: height + "px",
        top: -Math.random() * 20 + "%",
        left: Math.random() * 100 + "%",
        opacity: Math.random() + 0.5,
        transform: "rotate(" + Math.random() * 360 + "deg)"
      })
      .appendTo(confettiWrapperName);

    dropConfetti(i);    
  };

  const dropConfetti = x => {
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
  };


  const cleanConfetti = () => {
    let confettiElements = document.querySelectorAll('.confetti');
    confettiElements.forEach(el => el.remove());

  };


  return {
    startConfetti: startConfetti,
    cleanConfetti: cleanConfetti
  };

}());



// ORIGINAL CODE
/*function startConfetti(){
  for (var i = 0; i < 250; i++) {
    create(i);
  }
}*/


/*function create(i) {
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
  
  // *** TO VANILLA JAVASCRIPT 
  var className = `confetti-${i}`;
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
  confettiWrapper.appendChild(confettiEl);
  // *** TO VANILLA JAVASCRIPT 


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
}*/

/*function drop(x) {
  

  // *** TO VANILLA JAVASCRIPT 
  var confettiEl = document.querySelector('.confetti-'+x);
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
  );
  // *** TO VANILLA JAVASCRIPT 

  $(".confetti-" + x).animate(
    {
      top: "100%",
      left: "+=" + Math.random() * 15 + "%"
    },
    Math.random() * 3000 + 3000
     function() {
       restart(x);
     }
  );
}*/

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

