import axios from "axios";

const api=axios.create({
    // baseURL:"http://localhost:8080/api/",
    timeout: 100000
});

export default api;