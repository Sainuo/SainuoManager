import axios from "axios"

axios.interceptors.response.use(
    response => response,
    error => {
        $nuxt.$children[0]
            .$message({
                showClose: true,
                message: error.response.data.error.message,
                duration:10000,
                type: 'error'
            });
        return Promise.reject(error);
    }
)