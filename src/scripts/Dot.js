export let Dot = (function(){
	const dots = [
		{
			id: 'blue-dot',
			color: 'blue',
			classList: 'dot-img blue',
			src: 'img/ia-logo-dot-blue.png',
			alt: 'Blue dot',
			title: 'Drag me!'
		},
		{
			id: 'red-dot',
			color: 'red',
			classList: 'dot-img red',
			src: 'img/ia-logo-dot-red.png',
			alt: 'Red dot',
			title: 'Drag me!'
		},
		{
			id: 'green-dot',
			color: 'green',
			classList: 'dot-img green',
			src: 'img/ia-logo-dot-green.png',
			alt: 'Green dot',
			title: 'Drag me!'
		},
		{
			id: 'black-dot',
			color: 'black',
			classList: 'dot-img black',
			src: 'img/ia-logo-dot-black.png',
			alt: 'Black dot',
			title: 'Drag me!'
		},
		{
			id: 'black-dot-2',
			color: 'black',
			classList: 'dot-img black',
			src: 'img/ia-logo-dot-black.png',
			alt: 'Another black dot',
			title: 'Drag me!'
		}
	];

	const createDots = () => {
		let sourceContainers = document.querySelectorAll('.source-container');
		let counter = 0;

		sourceContainers.forEach((container) => {
			let {id, classList, src, alt, title} = dots[counter];
			let dotElement = document.createElement('img');
			
			dotElement.setAttribute('id', id);
			dotElement.setAttribute('src', src);
			dotElement.setAttribute('class', classList);
			dotElement.setAttribute('alt', alt);
			dotElement.setAttribute('title', title);
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