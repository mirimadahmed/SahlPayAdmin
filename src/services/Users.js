import Api from '../services/Api'

export default {
  getUsers () {
    return Api().get('users/customer')
  },
  getMerchants () {
    return Api().get('users/merchant')
  },
  newHaji (formData) {
    return Api().post('user', formData)
  }
}
