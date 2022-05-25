import axios from "axios";
import cookieController from "libs/cookieController";

const instance = axios.create();

instance.interceptors.request.use(
    (config) => {
        config.headers = {
            ...config.headers,
            authorization: cookieController.get("isLogined") || "test",
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: any) => {
        return Promise.reject(error);
    });

export default instance;