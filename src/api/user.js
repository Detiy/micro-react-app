import axios from './request'
// 登录
const getUserList = {
  getUserList(params) {
    return axios.post('/api/user', params)
  }
}
export default getUserList