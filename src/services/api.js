import axios from 'axios';

const api = axios.create({
    baseURL:'https://trabalho-ecommerce.herokuapp.com/',
})

export default api;
