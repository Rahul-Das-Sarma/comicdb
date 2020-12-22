import axios from  'axios';


const baseUrl = 'http://gateway.marvel.com/v1/public/'

const axiosInstance = axios.create({
    baseURL: baseUrl,
    params:{
        ts: 1,
        hash: process.env.REACT_APP_HASH,
        apikey: process.env.REACT_APP_PUBLIC_KEY
    }
})

export default axiosInstance;