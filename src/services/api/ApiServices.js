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
    static getStatistics() {
        return request.get("products/statistics/");
    }
    static getTransactions() {
        return request.get("products/transactions/");
    }
    static getOrders() {
        return request.get("products/orders/");
    }
    static getProducts({limit=10, offset=0}) {
        return request.get(`products/?limit=${limit}&offset=${offset}`);
    }
}
export default ApiServices