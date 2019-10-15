
// *** COLOR PICKER
function getColorClassName(id){
	
	//Color Catalog Object
	const colorCatalog = [
		{
			id: 1,
			color: 'blue',
			className: 'blue-target-container-over',
		},
		{
			id: 2,
			color: 'red',
			className: 'red-target-container-over',
		},
		{
			id: 3,
			color: 'green',
			className: 'green-target-container-over',
		},
		{
			id: 4,
			color: 'black',
			className: 'black-target-container-over',
		},
	];

	let colorNum;

	if(id.indexOf('blue') >= 0){
		colorNum = 1;
	}
	else if(id.indexOf('red') >= 0){
		colorNum = 2;
	}
	else if(id.indexOf('green') >= 0){
		colorNum = 3;
	}
	else{ //black
		colorNum = 4;
	}

	let colorObj = colorCatalog.filter(colorObj =>  colorObj.id === colorNum);

	if(colorObj.length > 0){
		return colorObj[0].className;
	}
	else{
		return '';
	}
}


// *** CREATE DOTS
function createDots(){

	// Dots catalog
	const dotsInfo = [
		{
			id: 'blue-dot',
			elClass: 'dot-img',
			src: 'img/ia-logo-dot-blue.png'
		},
		{
			id: 'red-dot',
			elClass: 'dot-img',
			src: 'img/ia-logo-dot-red.png'
		},
		{
			id:'green-dot',
			elClass: 'dot-img',
			src: 'img/ia-logo-dot-green.png'
		},
		{
			id: 'black-dot',
			elClass: 'dot-img',
			src: 'img/ia-logo-dot-black.png'
		},
		{
			id: 'black-dot',
			elClass: 'dot-img',
			src: 'img/ia-logo-dot-black.png'
		}
	];

	let sourceContainers = document.querySelectorAll('.source-container');
	let counter = 0;

	sourceContainers.forEach((container) => {
		let {id, elClass, src} = dotsInfo[counter];
		let dotElement = document.createElement('img');
		
		dotElement.setAttribute('id', id);
		dotElement.setAttribute('src', src);
		dotElement.setAttribute('class', elClass);
		container.appendChild(dotElement);

		counter++;
	});
}

function resetTargetAreas(){
	let dots = document.querySelectorAll('.dot-img');

	dots.forEach(dot => {
		dot.parentElement.removeChild(dot);
	});
}

// ** EVENT HANDLERS
// Source areas
const dragStart = e => {
	e.dataTransfer.setData('text/plain', e.target.id);
};

// Target areas
const dragOver = e => {
	cancel(e);
	
	mouseOver(e);
};

const dragLeave = e => {
	cancel(e);

	mouseLeave(e);
};

const dropped = e => {
	cancel(e);

	let sourceId = e.dataTransfer.getData('text/plain'); //blue-dot
	let colorClassName = getColorClassName(e.target.id);
	let dotsAssembledNum = 0;

	e.target.classList.remove('target-container-over', colorClassName);

	if(e.target.id.indexOf(sourceId) >= 0){
		e.target.appendChild(document.querySelector('#' + sourceId));
		e.target.removeEventListener('mouseover', mouseOver, false);
		e.target.removeEventListener('mouseleave', mouseLeave, false);


		let dotsAssembledStr = sessionStorage.getItem('dotsAssembled');
		dotsAssembledNum = parseInt(dotsAssembledStr, 10) + 1;
		
		sessionStorage.setItem('dotsAssembled', dotsAssembledNum.toString());
		
	}

	if(dotsAssembledNum === 5){
		openCongratulationsModal();
	}
};

const cancel = e => {
	if(e.preventDefault) 
		e.preventDefault();
	return false;
};

const mouseOver = e => {
	if(!e.target.hasChildNodes()){
		let colorClassName = getColorClassName(e.target.id);
		e.target.classList.add('target-container-over' , colorClassName);
	}
};

const mouseLeave = e => {
	let colorClassName = getColorClassName(e.target.id);
	e.target.classList.remove('target-container-over', colorClassName);
};


// *** ATTACH EVENTS
// Source areas
function attachSourceEvents(dots){
	dots.forEach(dot => {
		dot.addEventListener('dragstart', dragStart, false);
	});
}

// Target areas 
function attachTargetEvents(targets) {
	targets.forEach(target =>{
		target.addEventListener('drop', dropped, false);
		target.addEventListener('dragenter', cancel, false);
		target.addEventListener('dragover', dragOver, false);
		target.addEventListener('dragleave', dragLeave, false);
	});
}

function attachMouseEvents(targets){
	targets.forEach(target =>{
		target.addEventListener('mouseover', mouseOver, false);
		target.addEventListener('mouseleave', mouseLeave, false);
	});	
}


// *** RESET BUTTON
const reset = e => {
	resetTargetAreas();
	init();
}

let resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', reset, false);


// *** CONGRATULATIONS WINDOW
function openCongratulationsModal() {
		let modal = document.querySelector('.modal');
		modal.style.display = "block";
		startConfetti();
}

// *** INIT
const init = () => {
	createDots();

	let dots = document.querySelectorAll('.dot-img');
	let targets = document.querySelectorAll('.target-container');
	
	attachSourceEvents(dots);
	attachTargetEvents(targets);
	attachMouseEvents(targets);

	sessionStorage.setItem('dotsAssembled', '0');
}
init();





