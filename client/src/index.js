import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import Provider from './contexts';
import i18n from './locales/i18n';
import './assets/css/styles.css';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider>
      <Router>
        <App />
      </Router>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
);
