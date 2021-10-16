import axios from 'axios';
const axiosClient =axios.create({
    baseURL:process.env.REACT_APP_BACKEND_URL // se conecte a localhost o heroku
})

export default axiosClient;