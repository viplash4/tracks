import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance =  axios.create({
    baseURL: 'http://5746-77-123-51-187.ngrok.io', //ngrok url, update EVERY 8 HOURS OR RERUN
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;