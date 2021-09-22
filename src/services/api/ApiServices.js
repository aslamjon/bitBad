import { request } from './index';
class ApiServices {
    // static faqat class ga tegishli
    static logInOrSignUp({phone_number, to_reqister}) {
        return request.post('accounts/send-code/', {phone_number, to_reqister})
    }
    static login({phone_number, code}) {
        return request.post('accounts/login/', {phone_number, code})
    }
    static signUp({phone_number, full_name}) {
        return request.post('accounts/register/', {phone_number, full_name})
    }
    static getMe(token) {
        if (token) return request.get('accounts/profile/', {token})
        else return request.get('accounts/profile/')
    }
}
export default ApiServices