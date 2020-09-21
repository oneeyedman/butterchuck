import {butter} from './vars.js';
import {setPageSeoData, writeHero} from './page.js';

const body = document.body;
const page = body.querySelector('.js__page');

butter.page.retrieve('*', 'home', {locale: 'es'})
	.then(res => res.data.data)
	.then(data => {
		console.log(data);
		const {seo, butterhero} = data.fields;
		setPageSeoData(seo);
		writeHero(page, butterhero);
	});
