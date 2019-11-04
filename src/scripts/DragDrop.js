import {Modal} from './Modal.js'; 
import {Confetti} from './Confetti.js'; 

export let DragAndDrop = (function(){

	let dragElements;
	let dropElements;


	// *** HELPER FUNCTIONS
	// Validate Elements
	// @parameter type 1: drag
	// @parameter type 2: drop
	const validElements = (elements, type) => {
		let action = (type === 1 ? 'dragged' : 'dropped');

		try{
			if(typeof(elements) === 'undefined'){
				throw new Error(`Please provide the elements to be ${action}.`);
			}
			else if(typeof(elements) !== 'object' || typeof(elements) === null){
				throw new Error('The elements provided are not valid.');	
			}
		}
		catch(error){
			console.log(error);
			return false;
		}

		return true;
	};
	// ---------------------------------------------------------------------------


	// *** DRAG SECTION
	// Initialize Drag Elements
	const setDragElements = sourceElements => {
		if(validElements(sourceElements, 1)){
			dragElements = sourceElements;
			attachSourceEvents();
		}
	};
	//Drag Event Handlers
	// Drag start
	const dragStart = e => {
		e.dataTransfer.setData('text/plain', e.target.id);
	};
	// Attach Event Handlers
	const attachSourceEvents = () => {
		dragElements.forEach(source => {
			source.addEventListener('dragstart', dragStart, false);
		});
	};
	// ---------------------------------------------------------------------------


	// *** DROP SECTION
	// Initialize Drop Elements
	const setDropElements = dropAreaElements => {
		if(validElements(dropAreaElements, 2)){
			dropElements = dropAreaElements;
			attachTargetEvents();
			resetDotsAssembled();
		}
	};

	// Drop Event Handlers
	// Drag over
	const dragOver = e => {
		cancel(e);
		
		mouseOver(e);
	};
	// Drag leave
	const dragLeave = e => {
		cancel(e);

		mouseLeave(e);
	};
	// Drop
	const dropped = e => {
		cancel(e);

		//Get the dot image id (The source element)
		let sourceId = e.dataTransfer.getData('text/plain');
		let dotElement = document.querySelector('#' + sourceId);
		let dotsAssembledNum = 0;
		let allowDrop = false;

		//Get the data of the target element (The drop area)
		let color = e.target.dataset.color;

		// If data-color attribute is the same color of the source id,
		// we allow the drop.
		if(sourceId.indexOf(color) >= 0){
			allowDrop = true;
		} 
		if(allowDrop){
			//Create session variable if it is null
			if(sessionStorage.getItem('dotsAssembled') === null){
				sessionStorage.setItem('dotsAssembled', '0');
			}

			//Update dots assembled session variable
			
			//Check first if the parent element is already "drop area" (a dot slot within the logo)
			//(for the special case of black dots)
			//Get the parent element
			let parentElement = dotElement.parentElement;
			let parentElementClasses = parentElement.classList;
			if(!parentElementClasses.contains('target-container')){
				let dotsAssembledStr = sessionStorage.getItem('dotsAssembled');
				dotsAssembledNum = parseInt(dotsAssembledStr, 10) + 1;
				sessionStorage.setItem('dotsAssembled', dotsAssembledNum.toString());
			}

			//Append the dot image
			e.target.appendChild(dotElement);
		}

		//If the logo is completely assembled, congratulate the user
		if(dotsAssembledNum === 5){
			resetDotsAssembled();
			let modalElelemen = document.querySelector('.modal');

			setTimeout(function(){
				Modal.openModal(modalElelemen);
				Confetti.startConfetti('confetti-wrapper');
			}, 100);
		}
	};

	// Cancel 
	const cancel = e => {
		if(e.preventDefault) 
			e.preventDefault();
		return false;
	};

	// Mouse Over
	const mouseOver = e => {
		if(!e.target.hasChildNodes()){
			e.target.classList.add('over');
		}
	};

	// Mouse Leave
	const mouseLeave = e => {
		e.target.classList.remove('over');
	};

	// Attach Event Handlers
	const attachTargetEvents = () => {
		dropElements.forEach(target =>{
			target.addEventListener('drop', dropped, false);
			target.addEventListener('dragenter', cancel, false);
			target.addEventListener('dragover', dragOver, false);
			target.addEventListener('dragleave', dragLeave, false);
			target.addEventListener('mouseover', mouseOver, false);
			target.addEventListener('mouseleave', mouseLeave, false);
		});
	};

	// Reset Drop Elements
	const resetDropElements = () => {
		dropElements.forEach(dropElement => {
			if(dropElement.hasChildNodes()){
				dropElement.removeChild(dropElement.firstChild);	
			}
		});
		resetDotsAssembled();
	};

	const resetDotsAssembled = () => {
		sessionStorage.setItem('dotsAssembled', '0');
		Confetti.cleanConfetti();
	};
	// ---------------------------------------------------------------------------


	return {
		setDragElements: setDragElements,
		setDropElements: setDropElements,
		resetDropElements: resetDropElements
	};

}());