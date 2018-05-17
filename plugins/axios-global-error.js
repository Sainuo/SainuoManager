import axios from "axios"

axios.interceptors.response.use(
    response => response,
    error => {
        let viewModel = $nuxt.$children[0];
        if (error.response.status === 401) {
            viewModel.$alert('会话过期', {
                type: "error",
                showClose: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                confirmButtonText: '重新登录',
                callback: action => {
                    viewModel.$router.replace("/");
                }
            });

        }
        else {
            viewModel
                .$message({
                    showClose: true,
                    message: error.response.data.error.message,
                    duration: 10000,
                    type: 'error'
                });
        }
        return Promise.reject(error);
    }
)