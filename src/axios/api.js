import { request } from './index'
const baseUrl = import.meta.env.DEV ? '/api' : 'http://10.1.20.104:3000'
// 分页查询模型
export function getModelByPage(params = {}) {
  return request(`${baseUrl}/model/page`, params, 'get')
}

// 查询所有标签
export function getTagAll(params = {}) {
  return request(`${baseUrl}/tag/all`, params, 'get')
}

// 上传模型
export function uploadModels(params = {}) {
  const data = new FormData()
  for (const key in params) {
    data.append(key, params[key])
  }
  return request(`${baseUrl}/upload/model`, data, 'post')
}
