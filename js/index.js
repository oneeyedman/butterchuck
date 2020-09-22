import {butter} from './vars.js';
import {setPageSeoData, writeHero, setFooter} from './page.js';

const body = document.body;
const page = body.querySelector('.js__page');
const main = page.querySelector('.js__main');
const footer = page.querySelector('.js__footer');
const BUTTERPAGE = 'index';

butter.page.retrieve('*', BUTTERPAGE, {locale: 'es'})
	.then(res => res.data.data)
	.then(data => {
		console.log(data);
		const {seo, butterhero, sponsor} = data.fields;
		setPageSeoData(seo);
		writeHero(main, butterhero);
		setFooter(footer, sponsor)
	});
