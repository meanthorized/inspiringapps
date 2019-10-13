//Create dots
const createDots = () => {
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
			id: 'black-2-dot',
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

	//Event handlers
	const dragStart = e => {
		e.dataTransfer.setData('text/plain', e.target.id);
	};

	const dropped = e => {
		cancel(e);

		let id = e.dataTransfer.getData('text/plain'); //blue-dot

		if(e.target.id.indexOf(id) >= 0){
			e.target.appendChild(document.querySelector('#' + id));
		}
	};

	const cancel = e => {
		if(e.preventDefault) 
			e.preventDefault();
		return false;
	};


	//Attach events
	//Drag and Drop Source Areas 
	let dots = document.querySelectorAll('.dot-img');
	dots.forEach(dot => {
		dot.addEventListener('dragstart', dragStart, false);
	});

	//Drag and Drop Target Areas
	let dotTargets = document.querySelectorAll('.target-container');
	dotTargets.forEach(target =>{
		target.addEventListener('drop', dropped, false);
		target.addEventListener('dragenter', cancel, false);
		target.addEventListener('dragover', cancel, false);
	});
}
createDots();


const reset = e => {
	let dots = document.querySelectorAll('.dot-img');

	dots.forEach(dot => {
		dot.parentElement.removeChild(dot);
	});

	createDots();
}

//Button
let resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', reset, false);
