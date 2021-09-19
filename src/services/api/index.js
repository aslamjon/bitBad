import axios from 'axios';
import config from '../../config';

// Create default config
const request = axios.create({
    baseURL: config.API_ROOT,
    params: {},
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

// add data in request with interceptors (it is as middleware) 
axios.interceptors.request.use((request) => {
    if (!request.headers.Authorization) {
        const token = '';
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
}, (error) => {
    console.log(error);
})
axios.interceptors.response.use((response) => console.log(response), (error) => {
    const statusCode = error.status;
    if (statusCode == 401) {
        console.log('Logout')
    }
})

export {request};