import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IP } from '../../config';

const theme = createTheme();

const LogIn = () => {
  const navigate = useNavigate();
  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      user_email: data.get('email'),
      user_password: data.get('password'),
    };

    try {
      const res = await axios.post(`${IP}users/login`, userData);

      if (res.statusText === 'OK') {
        alert(res.data.message);
        localStorage.setItem('access_token', res.data.access_token);
        navigate('/');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <LoginContainer component="main" maxWidth="xs">
      <CssBaseline />
      <LoginBox>
        <LogoWrapper>
          <Logo src="/Logo.png" />
        </LogoWrapper>
        <LoginForm component="form" onSubmit={handleSubmit} noValidate>
          <IdInput
            margin="normal"
            required
            fullWidth
            id="email"
            label="아이디"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <PwInput
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <LoginButton type="submit" fullWidth variant="contained">
            로그인
          </LoginButton>
        </LoginForm>
      </LoginBox>
    </LoginContainer>
  );
};

export default LogIn;

const LoginContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled(Box)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
  padding: 3rem 3rem;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #ffffff;
`;

const LogoWrapper = styled(Box)`
  margin-top: 0.5rem;
`;

const Logo = styled('img')`
  width: 25rem;
  height: 11rem;
`;

const LoginForm = styled(Box)`
  margin-top: 0.5rem;
`;

const IdInput = styled(TextField)`
  margin-top: 3.25rem;
`;
const PwInput = styled(TextField)`
  margin: 0;
`;

const LoginButton = styled(Button)`
  margin-top: 4.5rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid #5e0080;
  box-shadow: none;
  color: #5e0080;
  background-color: #ffffff;

  &:hover {
    color: #ffffff;
    background-color: #5e0080;
    box-shadow: none;s
  }
`;
