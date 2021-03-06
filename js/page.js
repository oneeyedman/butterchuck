function setPageSeoData(data) {
	const head = document.querySelector('head');
	const title = head.querySelector('title');
	const description = head.querySelector('meta[name="description"]');

	title.innerText = data.title;
	if (description) {
		description.setAttribute('content', data.meta_description);
	} else {
		const descElement = document.createElement('meta');
		descElement.setAttribute('name', 'description');
		descElement.setAttribute('content', data.meta_description);
		head.appendChild(descElement);
	}
}





function writeHero(container, data) {
	const {title, image} = data;

	const template = `
		<section class="section hero">
			<div class="page__wrapper">
				<img class="hero__image" src="${image}" alt="${title}">
				<h1 class="hero__title">${title}</h1>
			</div>
		</section>`;

	container.insertAdjacentHTML('beforeend', template);
}





function setFooter(container, data) {
	const {text} = data;

	const template = `
		<div class="page__wrapper">
			<p class="footer__sponsor">${text}</p>
		</div>`;
	container.insertAdjacentHTML('beforeend', template);
}





export {setPageSeoData, writeHero, setFooter};
