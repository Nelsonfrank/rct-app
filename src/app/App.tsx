import React from 'react';
import MainRoute from './MainRoute';
import './App.less';

function App() {
  // window.onbeforeunload = function (e: { preventDefault: () => void }) {
  //   e.preventDefault();
  //   localStorage.clear();
  //   return '';
  // };
  return (
    <div className="app">
      <MainRoute />
    </div>
  );
}

export default App;
