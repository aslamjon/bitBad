import axios from 'axios';
import config from '../../config';
import { store } from '../../redux/store';
import { setCurrentToken } from '../../redux/user/userAction';

// store
store.subscribe(getToken)

function select(state) {
    return state.user.token
}

function getToken() {
    let token = select(store.getState())
    return token ? token : '';
}
function removeCurrentUser() {
    store.dispatch(setCurrentToken(''))
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
axios.interceptors.response.use((response) => console.log(response), (error) => {
    const statusCode = error.response.status;
    if (statusCode === 401) {
        console.log(getToken())
        removeCurrentUser()
    }
})

export {
    request,
};