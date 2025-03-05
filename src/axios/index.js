import axios from 'axios'

// 设置接口超时时间
const env = import.meta.env
axios.defaults.timeout = 60000
axios.defaults.baseURL = ''
const BASE_URL = ''

//http request 拦截器
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

//http response 拦截器
axios.interceptors.response.use(
  (response) => {
    return response.data || null
  },
  (error) => {
    const { response } = error
    if (response) {
      return Promise.reject(response.data)
    } else {
      //
    }
  }
)

// 封装 GET POST 请求并导出
export function request(url = '', params = {}, type = 'POST', extendOptions = { responseType: 'json' }) {
  //设置 url params type 的默认值
  return new Promise((resolve, reject) => {
    let promise
    if (type.toUpperCase() === 'GET') {
      promise = axios({
        baseURL: BASE_URL,
        url,
        params,
        responseType: extendOptions.responseType,
        onUploadProgress: (evt) => {
          if (evt.event?.lengthComputable && extendOptions.onUploadProgress) extendOptions.onUploadProgress(evt)
        }
      })
    } else if (type.toUpperCase() === 'POST') {
      promise = axios({
        method: 'POST',
        baseURL: BASE_URL,
        url,
        data: params,
        responseType: extendOptions.responseType,
        onUploadProgress: (evt) => {
          if (evt.event?.lengthComputable && extendOptions.onUploadProgress) extendOptions.onUploadProgress(evt)
        }
      })
    } else if (type.toUpperCase() === 'DELETE') {
      promise = axios({
        method: 'DELETE',
        baseURL: BASE_URL,
        url,
        data: params,
        responseType: extendOptions.responseType,
        onUploadProgress: (evt) => {
          if (evt.event?.lengthComputable && extendOptions.onUploadProgress) extendOptions.onUploadProgress(evt)
        }
      })
    } else if (type.toUpperCase() === 'PATCH') {
      promise = axios({
        method: 'PATCH',
        baseURL: BASE_URL,
        url,
        data: params,
        responseType: extendOptions.responseType,
        onUploadProgress: (evt) => {
          if (evt.event?.lengthComputable && extendOptions.onUploadProgress) extendOptions.onUploadProgress(evt)
        }
      })
    } else if (type.toUpperCase() === 'PUT') {
      promise = axios({
        method: 'PUT',
        baseURL: BASE_URL,
        url,
        data: params,
        responseType: extendOptions.responseType,
        onUploadProgress: (evt) => {
          if (evt.event?.lengthComputable && extendOptions.onUploadProgress) extendOptions.onUploadProgress(evt)
        }
      })
    }
    //处理返回
    promise
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
