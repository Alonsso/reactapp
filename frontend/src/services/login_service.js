import axios from "axios";

const baseUrl = '/api/login'

const login = async (username, password) => {
    const opciones = {
        method: 'post',
        url: baseUrl,
        headers: {
            'Content-Type': 'application/json',
            'Auhorization': 'Bearer'
        },
        redirect: 'manual',
        data: {
            user_name:username, user_password: password
        }
    }
    const request = axios(opciones)
    const response = await request;
    console.log(response.data)
    return response.data;
}

export default { login }