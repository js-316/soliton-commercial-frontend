import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import {  Container, Typography } from '@mui/material';
import { loginSchema } from '../utils/validations';
import { useLoginMutation } from '../features/auth/authApiSlice';
import { setCredentials } from '../features/auth/authSlice';
import logo from '../assets/soliton.png';
import Page from '../components/Page';
import AuthSocial from '../sections/auth/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

const Login = () => {
  const [appError, setAppError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (data) => {
    setAppError(null);
    try {
      const { token, user } = await login(data).unwrap();
      dispatch(setCredentials({ token, user }));

      if (user.needs_password_change) {
        // navigate('/dashboard/change-password');
        navigate('/dashboard/app');
      } else {
        navigate('/dashboard/app');
      }
    } catch (err) {
      if (parseInt(err.status, 10) !== err.status) { // Added radix parameter here
        setAppError('Network Error');
      } else {
        setAppError(err?.data?.message || err?.data?.non_field_errors[0]);
      }
    }
  };

  return (
    <Page title="Login">
      <RootStyle>
        <HeaderStyle>
          <img src={logo} alt="Soliton Logo" style={{ width: '40px' }} />

          <Typography variant="body2" sx={{ mt: { md: -2 } }}>
            Don’t have an account?{' '}
            <Link to="/register" style={{ textDecoration: 'none', color: '#1976d2' }}>
              Get started
            </Link>
          </Typography>
        </HeaderStyle>

        <Container maxWidth="sm">
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
              Sign in to Soliton Commercial
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>Enter your details below.</Typography>

            <AuthSocial />

            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="mb-3">
                <input
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  placeholder="Email"
                  type="text"
                  {...register('username')}
                />
                {errors.username && (
                  <div className="invalid-feedback">
                    {errors.username?.message}
                  </div>
                )}
              </div>
              <div className="mb-3 position-relative">
                <input
                  className="form-control"
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="password-icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password?.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <button type="submit" className="btn btn-primary w-100">
                  {isLoading ? 'Loading...' : 'Login'}
                </button>
              </div>
            </form>

            {appError && (
              <div className="alert alert-danger" role="alert">
                {appError}
              </div>
            )}

            <div className="text-center mt-4">
              <Link to="/password_reset">Forgot Password?</Link>
            </div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
};

export default Login;