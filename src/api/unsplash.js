import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7071c5aa337b7f1f3604ce12f9e1f451abde0970eb60e5189a2a802ddc2f1384' 
    }
});
