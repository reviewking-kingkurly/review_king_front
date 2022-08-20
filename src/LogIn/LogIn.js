import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImageListItem from '@mui/material/ImageListItem';
import { CardMedia, ImageList } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const LogIn = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            &#128081; 리뷰왕 킹컬리 &#128081;
          </Typography> */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Logo src="/Logo.png" />
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
            <LoginButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 2 }}
            >
              로그인
            </LoginButton>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LogIn;

const Logo = styled('img')`
  width: 25rem;
  height: 11rem;
`;

const IdInput = styled(TextField)``;
const PwInput = styled(TextField)``;

const LoginButton = styled(Button)`
  color: #5e0080;
  background-color: #ffffff;
  &:hover {
    color: #ffffff;
    background-color: #5e0080;
  }
  border: 1px solid #5e0080;
`;
