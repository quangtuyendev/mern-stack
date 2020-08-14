import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import AuthProvider from './contexts/AuthContext';
import i18n from './locales/i18n';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </I18nextProvider>,
  document.getElementById('root')
);
