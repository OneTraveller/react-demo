import { createStore, applyMiddleware } from 'redux';
import Reducer from '../Reducer';
import thunk from 'redux-thunk'

export const store = createStore(Reducer, applyMiddleware(thunk, fn))

// applyMiddleware中间件，做一些限制
function fn ({ getState }) {
  return (dispatch) => (action) => {
    dispatch(action)
  }
}