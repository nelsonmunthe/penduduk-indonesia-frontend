import { 
    GET_CHARTY_BY_AGAMA, 
    GET_CHARTY_BY_PEKERJAAN, 
    GET_CHART_BY_PENDIDIKAN, 
    GET_CHART_BY_PERNIKAHAN 
} from "../constants/dashboard"
import axiosInstance from "../utils/axiosInstance"

export const getChartByAgama = async () => {
    try {
        return await axiosInstance({
            ...GET_CHARTY_BY_AGAMA()
        })
    } catch (error) {
        throw error
    }
}

export const getChartByPekerjaan = async () => {
    try {
        return await axiosInstance({
            ...GET_CHARTY_BY_PEKERJAAN()
        })
    } catch (error) {
        throw error
    }
}

export const getChartByPendidikan = async () => {
    try {
        return await axiosInstance({
            ...GET_CHART_BY_PENDIDIKAN()
        })
    } catch (error) {
        throw error
    }
}

export const getChartByPernikahan = async () => {
    try {
        return await axiosInstance({
            ...GET_CHART_BY_PERNIKAHAN()
        })
    } catch (error) {
        throw error
    }
}