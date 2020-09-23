import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + '/api/questions';

function elementUrl(id) {
	return `${apiEndPoint}/${id}`;
}

export function getElements() {
	return http.get(apiEndPoint);
}

export function getOneElement(elementId) {
	return http.get(elementUrl(elementId));
}

export function putOneElement(id, element) {
	const body = { ...element };
	return http.put(elementUrl(id), body);
}

export function postOneElement(element) {
	return http.post(apiEndPoint, element);
}

// export function postOneElement(element) {
// 	console.log('this is the element', element);
// 	return fetch(apiEndPoint, {
// 		method: 'POST',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify(element),
// 	})
// 		.then((response) => response.json())
// 		.then((data) => {
// 			console.log(data);
// 		});
// }

export function deleteElement(id) {
	return http.delete(elementUrl(id));
}
