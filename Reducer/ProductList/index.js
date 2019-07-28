import { pList } from './state';
import { Action } from './action';

export default function productList (state = pList, action) {
  const type = action.type || '';
  // if (Action[type]) return Action[type](state);
  if (action.type === 'add') {
    state.push('诺基亚手机');
    return state;
  }
  if (action.type === 'delete') {
    state.pop();
    return state;
  }
  return state;
}