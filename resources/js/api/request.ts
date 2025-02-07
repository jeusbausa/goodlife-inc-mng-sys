import axios, { AxiosRequestHeaders, Method } from "axios";

export default async function request<F extends Record<string, string>, B>({
    url,
    method,
    params,
    body,
    headers,
}: {
    url: string;
    method: Method;
    params?: F;
    body?: B;
    headers?: AxiosRequestHeaders;
}) {
    return axios({
        url,
        method,
        data: body,
        headers,
        params,
    }).then((res) => res.data);
}
