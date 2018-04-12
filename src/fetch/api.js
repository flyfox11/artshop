
import axios from 'axios'
import qs from 'qs'
// axios
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8080/api/v1';


//POST
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){

        let token=sessionStorage.getItem('venture-token');
        if(token){
            // axios.defaults.headers.common['x-access-token'] =token;
            config.data=config.data||{};
            config.data.token=token;
        }
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    return Promise.reject(error);
});


axios.interceptors.response.use((res) =>{
    if(res.status!==200){
        return Promise.reject(res);
    }
    if(res.data.code=='03'){  //??token
        window.location='http://localhost:8080/login?no_token=1';
        return;
    }
    return res;
}, (error) => {
    return Promise.reject(error);
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default {

        GetUsers(params) {
        return fetch('/users', params)
    },


}
