import Api from '../services/Api'

export default {
  addclient (postdata) {
    return Api().post('addClient.php', postdata)
  }
}
