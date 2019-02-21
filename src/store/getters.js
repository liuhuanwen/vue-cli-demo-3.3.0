export default {
  totalCount(state) {
    return function (outerNum) {
      return state.count + outerNum;
    }
  }
}
