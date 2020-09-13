import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + '/api/questions/';

export function getQuestions() {
	return http.get(apiEndPoint);
}
