import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.onrender.com/api/v1',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});