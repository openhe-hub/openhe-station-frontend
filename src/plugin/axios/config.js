import axios from "axios";

const api=axios.create({
    baseURL:"http://www.openhe-station.com/",
    timeout: 5000
});

export default api;