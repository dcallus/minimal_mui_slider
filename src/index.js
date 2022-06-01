import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Slider from '@mui/material/Slider';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="slider">
          <Slider />
    </div>
  </React.StrictMode>
);