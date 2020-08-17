import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Col, Container, FormGroup, Label, Row } from 'reactstrap';
import { signin } from '../../actions/auth';
import { authApi } from '../../api/authApi';
import { AuthContext } from '../../contexts/AuthProvider';

Signin.propTypes = {
  t: PropTypes.func.isRequired,
};

function Signin({ t }) {
  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .required(t('authForm.requiredEmail'))
      .email(t('authForm.validEmail')),
    password: Yup.string()
      .required(t('authForm.requiredPass'))
      .min(8, t('authForm.minPass')),
  });

  const history = useHistory();
  const [error, setError] = useState();
  const { dispatch } = useContext(AuthContext);

  async function handlSignin(userInfo) {
    try {
      const { data, status } = await authApi.signin(userInfo);
      if (status === 200) {
        toast.success(data.message, {
          onClose: () => {
            dispatch(signin(data));
            localStorage.setItem('token', data.token);
            history.push('/shop');
          },
          autoClose: 1000,
        });
      }
    } catch (error) {
      setError(error.response.data.msg);
      setTimeout(() => {
        setError('');
      }, 2000);
    }
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={6} className="mx-auto">
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={SigninSchema}
            onSubmit={handlSignin}
          >
            {() => (
              <Form>
                {error && (
                  <span className="text-danger mb-2 d-block">{error}</span>
                )}
                <FormGroup>
                  <Label for="email">{t('authForm.emailLabel')}</Label>
                  <Field
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    placeholder={t('authForm.emailPlaceholder')}
                  />
                  <span className="text-danger">
                    <ErrorMessage name="email" />
                  </span>
                </FormGroup>
                <FormGroup>
                  <Label for="password">{t('authForm.passwordLabel')}</Label>
                  <Field
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    placeholder={t('authForm.passwordPlaceholder')}
                  />
                  <span className="text-danger">
                    <ErrorMessage name="password" />
                  </span>
                </FormGroup>
                <Button type="submit" color="primary">
                  {t('authForm.signinBtn')}
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default withTranslation('translations')(Signin);
