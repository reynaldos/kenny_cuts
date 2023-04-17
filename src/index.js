import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import './index.css';
import App from './App';


import { GlobalTheme } from "./util/theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={GlobalTheme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>
);

