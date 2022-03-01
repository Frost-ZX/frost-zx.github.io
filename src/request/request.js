import axios from 'axios';

/**
 * @typedef RequestParams
 * @type {Object.<string, (number|string|number[]|string[])}
 */

const instance = axios.create({
    baseURL: '',
    timeout: 10000,
    validateStatus: function (status) {
        return ((status >= 200 && status < 300) || status === 404);
    },
});

// 拦截请求
instance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 拦截响应
instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

/**
 * @description 处理请求
 * @param {object} options 配置选项
 * @param {('get'|'post')} [options.method] 请求方式，默认 GET
 * @param {string} options.url 请求地址
 * @param {RequestParams} [options.datas] 请求体（请求方式为 POST 时可用）
 * @param {RequestParams} [options.query] 查询参数
 */
const request = function (options = {}) {

    const method = String(options.method || 'get').toLowerCase();
    const {
        url = null,
        datas = null,
        query = null,
    } = options;

    if (url === null) {
        console.error('请求地址为空。');
        return Promise.reject();
    }

    if (method === 'get') {
        return instance({
            method,
            url,
            params: query,
        });
    } else if (method === 'post') {
        return instance({
            method,
            url,
            data: datas,
            params: query,
        });
    } else {
        console.error('请求方式错误。');
        return Promise.reject();
    }

};

export default request;
