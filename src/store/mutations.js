import {
  INCREMENT,
  SHOW_TOAST,
  SAVE_USER_ID
} from "./mutationTypes";

export default {
  [INCREMENT](state, num) {
    state.count = state.count + num;
  },
  [SHOW_TOAST](state, message) {
    state.toast = {message: message, isShow: true};
    setTimeout(() => {
      state.toast = {message: '', isShow: false};
    }, 2000)
  },
  [SAVE_USER_ID](state, userId) {
    state.user.userId = userId;
  }
}
