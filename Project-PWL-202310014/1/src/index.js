import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DataForm from './Component/DataForm';
import reportWebVitals from './reportWebVitals';
import StickyNotes from './Component/StickyNotes';
import Widget1 from './Component//Widget1';
import Widget1RCC from './Component/Widget1RCC';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataFormMultiple from './Component/DataFormMultiple'
import Form from './Component/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataFormMultiple/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
