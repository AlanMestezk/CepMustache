import axios, { AxiosInstance } from "axios";

const urlApi: string = 'https://viacep.com.br/ws/'

export const api: AxiosInstance = axios.create(

    {
        baseURL: urlApi
    }
)