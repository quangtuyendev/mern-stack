import { ErrorMessage, Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Col, Container, FormGroup, Label, Row } from 'reactstrap';
import { authApi } from '../../api/authApi';
import { SignupSchema } from '../../formikSchema/formikSchemaConfig';

Register.propTypes = {
  t: PropTypes.func.isRequired,
};

function Register({ t }) {
  const history = useHistory();
  const [error, setError] = useState('');

  async function handleRegister(userInfo) {
    try {
      const { data, status } = await authApi.register(userInfo);
      if (status === 201) {
        toast.success(data.msg, {
          onClose: () => {
            history.push('/signin');
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
              username: '',
              email: '',
              password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={handleRegister}
          >
            {() => (
              <Form>
                {error && (
                  <span className="text-danger mb-2 d-block">{error}</span>
                )}
                <FormGroup>
                  <Label for="username">{t('authForm.userNameLabel')}</Label>
                  <Field
                    className="form-control"
                    type="text"
                    id="username"
                    name="username"
                    placeholder={t('authForm.userNamePlaceholder')}
                  />
                  <span className="text-danger">
                    <ErrorMessage name="username" />
                  </span>
                </FormGroup>
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
                    type="text"
                    id="password"
                    name="password"
                    placeholder={t('authForm.passwordPlaceholder')}
                  />
                  <span className="text-danger">
                    <ErrorMessage name="password" />
                  </span>
                </FormGroup>
                <Button type="submit" color="primary">
                  {t('authForm.registerBtn')}
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default withTranslation('translations')(Register);
