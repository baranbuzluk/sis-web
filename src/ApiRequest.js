const API_BASE_URL = 'http://localhost:8080';
const headers = { 'Content-Type': 'application/json' };

export const sendLoginRequst = async (username, password) => {
    const body = JSON.stringify({ username, password });
    return fetch(API_BASE_URL + '/auth/login', { method: 'POST', headers, body });
};
