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


export function deleteElement(elementId) {
	return http.delete(elementUrl(elementId));
}

