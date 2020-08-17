import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, 'User name must be at least 6 characters')
    .max(40, 'User name too long')
    .required('User name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid email'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});
