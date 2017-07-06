import axios from 'axios';

export const FETCH_SVG = 'FETCH_SVG';

export function fetchSvg(tag) {

	const url = `https://icartus-portfolio-api.herokuapp.com/items/`;
	const request = axios.get(url);

	return {
		type: FETCH_SVG,
		payload: request
	};
}
