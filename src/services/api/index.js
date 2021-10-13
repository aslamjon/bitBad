import axios from 'axios';
import config from '../../config';
import { store } from '../../redux/store';
import { setCurrentToken, setCurrentUser } from '../../redux/user/userAction';

// store
store.subscribe(getToken)

function select(state) {
    return state.token.token
}

function getToken() {
    let token = select(store.getState())
    return token ? token : '';
}
function removeCurrentUser() {
    store.dispatch(setCurrentToken(''))
    store.dispatch(setCurrentUser(''))
}

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
request.interceptors.request.use((request) => {
    if (!request.headers.Authorization) {
        const token = getToken();
        if (token)
            request.headers.Authorization = `Token ${token}`;
    }
    return request;
}, (error) => {
    console.log(error);
})
request.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const statusCode = error.response.status;
    if (statusCode === 401) {
        // console.log(statusCode, 'in services/api/index')
        removeCurrentUser()
    }
})

export {
    request,
};