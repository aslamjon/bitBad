import { request } from './index';
class ApiServices {
    // static faqat class ga tegishli
    static logInOrSignUp({phone_number, to_reqister}) {
        return request.post('accounts/send-code/', {phone_number, to_reqister})
    }
    static login({phone_number, code}) {
        return request.post('accounts/login/', {phone_number, code})
    }
    static signUp(params) {
        return request.post('accounts/register/', {...params})
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
    static getProductsByCategoryId(id) {
        return request.get(`products/?categoryId=${id}`);
    }
    static getFlows() {
        return request.get(`products/flows`);
    }
}
export default ApiServices