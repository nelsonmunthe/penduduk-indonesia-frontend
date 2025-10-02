import { AxiosRequestConfig } from 'axios'

export const GET_CHART_BY_PENDIDIKAN = (): AxiosRequestConfig => ({
    method: 'GET',
    url: `/data-penduduk/pendidikan-chart`
})

export const GET_CHART_BY_PERNIKAHAN = (): AxiosRequestConfig => ({
    method: 'GET',
    url: `/data-penduduk/pernikahan-chart`
})

export const GET_CHARTY_BY_AGAMA = (): AxiosRequestConfig => ({
    method: 'GET',
    url: `/data-penduduk/religion-chart`
})

export const GET_CHARTY_BY_PEKERJAAN = (): AxiosRequestConfig => ({
    method: 'GET',
    url: `/data-penduduk/pekerjaan-chart`
})