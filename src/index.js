import {Dot} from './scripts/Dot.js';
import {DragAndDrop} from './scripts/DragDrop.js';
//import {Modal} from './scripts/modal.js';

(function(){

	const initDragElements = () => {
		Dot.createDots();
		let dotElements = document.querySelectorAll('.dot-img');
		DragAndDrop.setDragElements(dotElements);
	};

	const initDropElements = () => {
		let dropElements = document.querySelectorAll('.target-container');
		DragAndDrop.setDropElements(dropElements);
	};
	

	// *** RESET BUTTON
	const reset = e => {
		DragAndDrop.resetDropElements();
		
		Dot.removeDots();
		initDragElements();
	};
	let resetButton = document.querySelector('#reset-btn');
	resetButton.addEventListener('click', reset, false);
	// ------------------------------------------------------

	initDragElements();
	initDropElements();

}());


/*let m = document.querySelector('.modal');
Modal.init(m);
Modal.openModal();*/