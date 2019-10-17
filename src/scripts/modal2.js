

const closeModal = e => {
	let modal = document.querySelector('.modal');
	modal.style.display = 'none';
	cleanConfetti();
};

const restart = e => {
	closeButton.click();
	resetButton.click();
}


let closeButton = document.querySelector('.close-btn');
let restartButton = document.querySelector('#restart-btn');
let modal = document.querySelector('.modal');

closeButton.addEventListener('click', closeModal);
restartButton.addEventListener('click', restart);
modal.addEventListener('click', closeModal);