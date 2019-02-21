import {
  INCREMENT,
  CONTROL_TOAST,
  SAVE_USER_ID
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
    state.user.userId = userId;
  }
}
