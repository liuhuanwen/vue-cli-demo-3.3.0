import {
  INCREMENT,
  CONTROL_TOAST,
  SAVE_USER_ID,
  SAVE_USER_INFO
} from "./mutationTypes";

export default {
  [INCREMENT](state, num) {
    state.count = state.count + num;
  },
  [CONTROL_TOAST](state, message) {
    if (message && typeof message === 'string') {
      state.toast = {message: message, isShow: true};
    } else {
      state.toast = {message: '', isShow: false};
    }
  },
  [SAVE_USER_ID](state, userId) {
    state.userId = userId;
  },
  [SAVE_USER_INFO](state, user) {
    state.user = user;
  }
}
