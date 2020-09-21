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
	const body = {...element}
	return http.put(elementUrl(id), body);
}

export function postOneElement(element) {
	const body = {...element}
	return http.post(apiEndPoint, body);
}

export function deleteElement(id) {
	return http.delete(elementUrl(id));
}

