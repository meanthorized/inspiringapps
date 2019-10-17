export let Modal = (function(){
	let modalElement;
	let closeButton;
	let restartButton;

	const validModal = (modalEl) => {
		try{
			if(typeof(modalEl) === 'undefined'){
				throw new Error('No modal element provided.');
			}
			else if(typeof(modalEl) !== 'object' || typeof(modalEl) === null){
				throw new Error('Please provide a valid modal element.');
			}
		}
		catch(error){
			console.log(error);
			return false;
		}

		return true;
		
	};

	const setModalElement = (modalEl) => {
		if(validModal(modalEl)){
			modalElement = modalEl;

			setCloseButton();
			attachEventHandlers();

			openModal();
		}
	}

	const setCloseButton = () => {
		closeButton = modalElement.querySelector('.close-btn');
		restartButton = modalElement.querySelector('#restart-btn');
	};

	const openModal = () =>{
		modalElement.style.display = 'block';
	};

	const closeModal = () => {
		modalElement.style.display = 'none';
	};

	const attachEventHandlers = () =>{
		closeButton.addEventListener('click', closeModal);
		restartButton.addEventListener('click', closeModal);
		modalElement.addEventListener('click', closeModal);
	};

	
	return{
		openModal: setModalElement
	};

}());