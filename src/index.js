import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';
import './styles/App.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);