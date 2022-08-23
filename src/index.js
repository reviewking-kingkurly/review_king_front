import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ThemeProvider as ThemeProviderMui,
  createTheme,
} from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProviderMui theme={createTheme()}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </ThemeProviderMui>
    </React.StrictMode>
  </BrowserRouter>
);
