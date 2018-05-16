import axios from "axios"

axios.interceptors.response.use(
    response => response,
    error => {
        console.log("error");
        $nuxt.$children[0].$alert(error.response.data.error.message);
        return Promise.reject(error);
    }
)