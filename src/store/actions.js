import {
  GET_LOGIN_INFO,
} from "./mutationTypes";
import {login} from "../api/userApi";

export default {
  async login({commit}, {username, password}) {
    let res = await login(username, password);
    commit(GET_LOGIN_INFO, res);
  }
}
