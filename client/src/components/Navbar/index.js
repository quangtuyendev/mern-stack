import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from 'reactstrap';
import { signout } from '../../actions/auth';
import { AuthContext } from '../../contexts/AuthProvider';
import ChangeLanguage from './ChangeLanguage';

Navbar.propTypes = {
  t: PropTypes.func.isRequired,
};

function Navbar({ t }) {
  const {
    auth: { username },
    dispatch,
  } = useContext(AuthContext);

  function handleSignout(event) {
    event.preventDefault();
    toast.success('Just a moment', {
      onClose: () => {
        dispatch(signout());
        window.location.reload();
      },
      autoClose: 1000,
    });
  }

  function customMenu() {
    if (!username) {
      return (
        <>
          <li className="nav-item">
            <Link to="/signin" className="nav-link">
              {t('nav.signin')}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              {t('nav.register')}
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <li className="nav-item">
          <a onClick={handleSignout} href="/" className="nav-link">
            {t('nav.signout')} (<b>{username}</b>)
          </a>
        </li>
      );
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
          <a className="navbar-brand" href="/">
            {t('logoName')}
          </a>
          <ul className="navbar-nav">{customMenu()}</ul>
          <ChangeLanguage />
        </div>
      </Container>
    </nav>
  );
}

export default withTranslation('translations')(Navbar);
