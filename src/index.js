import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
=======
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
>>>>>>> origin
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
