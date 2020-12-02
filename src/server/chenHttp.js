import axios from 'axios'
import qs from 'qs'

const HTTP = axios.create({
    baseURL: "/miaov",
    withCredentials: true,
    transformRequest:(data)=>{
        return qs.stringify(data)
    }
});

//返回一个Promise(发送post请求)
export function fetchPost(url, param) {
    return new Promise((resolve, reject) => {
        HTTP.post(url, param)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
export default fetchPost;