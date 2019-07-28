const Action = {
  add (state) {
    state.push('诺基亚手机');
    return state;
  },

  delete (state) {
    state.pop();
    return state;
  }
}

export { Action }