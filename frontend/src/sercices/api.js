import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.110.157.4:9999'
})

export default api