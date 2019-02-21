import {
  GET_LOGIN_INFO,
  CONTROL_TOAST
} from "./mutationTypes";
import {login} from "../api/userApi";

export default {
  async login({commit}, {username, password}) {
    let res = await login(username, password);
    commit(GET_LOGIN_INFO, res);
  },
  showToast({commit}, message) {
    commit(CONTROL_TOAST, message);
    setTimeout(() => {
      commit(CONTROL_TOAST, '');
    }, 2000);
  }
}
