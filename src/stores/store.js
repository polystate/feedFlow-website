//a store is a centralized place to store data, basically data that we want to use in all of our different components globally

import { writable } from 'svelte/store';

export const dataAPI = writable([]);
export const brandName = 'feedFlow';
export const fetchData = async (url) => {
	const res = await fetch(url);
	const data = await res.json();
	const loadedData = data.articles.map((article, index) => {
		return {
			author: article.author,
			id: index + 1,
			imageURL: article.urlToImage,
			url: article.url,
			alt: article.source.name,
			title: article.title,
			content: article.content,
			description: article.description,
			publishedAt: article.publishedAt
		};
	});
	dataAPI.set(loadedData);
};
