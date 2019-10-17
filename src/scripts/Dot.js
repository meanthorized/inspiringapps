export let Dot = (function(){
	const dots = [
		{
			id: 'blue-dot',
			color: 'blue',
			classList: 'dot-img blue',
			src: 'img/ia-logo-dot-blue.png'
		},
		{
			id: 'red-dot',
			color: 'red',
			classList: 'dot-img red',
			src: 'img/ia-logo-dot-red.png'
		},
		{
			id: 'green-dot',
			color: 'green',
			classList: 'dot-img green',
			src: 'img/ia-logo-dot-green.png'
		},
		{
			id: 'black-dot',
			color: 'black',
			classList: 'dot-img black',
			src: 'img/ia-logo-dot-black.png'
		},
		{
			id: 'black-dot-2',
			color: 'black',
			classList: 'dot-img black',
			src: 'img/ia-logo-dot-black.png'
		}
	];

	const createDots = () => {
		let sourceContainers = document.querySelectorAll('.source-container');
		let counter = 0;

		sourceContainers.forEach((container) => {
			let {id, classList, src} = dots[counter];
			let dotElement = document.createElement('img');
			
			dotElement.setAttribute('id', id);
			dotElement.setAttribute('src', src);
			dotElement.setAttribute('class', classList);
			container.appendChild(dotElement);

			counter++;
		});
	}

	const removeDots = () => {
		let dots = document.querySelectorAll('.dot-img');
		dots.forEach(dot => dot.remove());
	};

	return {
		createDots: createDots,
		removeDots: removeDots
	};

}());