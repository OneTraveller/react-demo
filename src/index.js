import React from 'react';
import ReactDOM from 'react-dom';
import Common from '../components/common.jsx';
import { store } from '../store';

const App = () => {
  return (
    <div>
      <Common />
    </div>
  )
};
function render () {
  ReactDOM.render(<App />, document.getElementById('app'));
}
render();
store.subscribe(render);