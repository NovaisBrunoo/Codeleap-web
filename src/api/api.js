import axios from 'axios';

export default axios.create({
    baseURL: 'https://dev.codeleap.co.uk/',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});