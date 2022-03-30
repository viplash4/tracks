import axios from "axios";

export default axios.create({
    baseURL: 'http://9c00-77-123-51-187.ngrok.io', //ngrok url, update EVERY 8 HOURS OR RERUN
});
