import axios from 'axios'

const api = axios.create({
	baseURL: 'http://192.168.6.249:8101',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	withCredentials: true,
})

export default api;