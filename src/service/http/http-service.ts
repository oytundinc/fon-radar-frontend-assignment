import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const baseURL: string = "https://6215eeb77428a1d2a354c664.mockapi.io/api/v1";

const axiosConfig: AxiosRequestConfig = {
    baseURL: baseURL
};

class HttpService {
    private _client: AxiosInstance;

    constructor() {
        this._client = axios.create(axiosConfig);
    }

    public get client(): AxiosInstance {
        return this._client;
    }
}

export const httpService = new HttpService();