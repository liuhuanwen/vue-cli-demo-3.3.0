import {
  GET_LOGIN_INFO,
  CONTROL_TOAST,
  SAVE_USER_INFO
} from "./mutationTypes";
import {login, getUserInfo} from "../api/userApi";

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
  },
  async getUserInfo({commit}, userId) {
    let res = await getUserInfo(userId);
    commit(SAVE_USER_INFO, res);
  }
}
