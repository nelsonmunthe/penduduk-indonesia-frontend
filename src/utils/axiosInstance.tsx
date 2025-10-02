import axios from "axios";

const HOSTNAME = process.env.REACT_APP_HOST

const axiosInstance = axios.create({
    baseURL : HOSTNAME,
    headers: {},
})

axiosInstance?.interceptors.request.use(
    async (config) => {
        return config
    },
    async (error) => {
        return Promise.reject(error)
    }
)

axiosInstance?.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      return Promise.reject(error)
    }
)

export default axiosInstance