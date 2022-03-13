import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './MainApp';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <MainApp/>
    <div className='foot'></div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
