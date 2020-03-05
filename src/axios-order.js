import axios from 'axios';

const axiosinstance=axios.create({
    baseURL: 'https://react-burger-app-9baca.firebaseio.com/'
});

export default axiosinstance;