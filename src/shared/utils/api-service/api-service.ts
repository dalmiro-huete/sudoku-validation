import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

const ApiService = <T>({ method, url, params, data, responseType }: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return axios.request<T>({
        method,
        url,
        params,
        data,
        responseType,
    })
}

export default ApiService