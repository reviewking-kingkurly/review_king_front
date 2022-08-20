/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

const EmotionTest = () => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        boxSizing: 'border-box',
      }}
    >
      <Input name="email" placeholder="이메일" />
      <Input name="password" placeholder="비밀번호" type="password" />
      <Button>확인</Button>
    </div>
  );
};

export default EmotionTest;

const Input = styled.input`
  border: 1px solid black;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 0.5rem;
`;

const Button = ({ children }) => {
  return (
    <button
      css={{
        border: '1px solid black',
        borderRadius: '6px',
        padding: '1rem',
        marginTop: '2rem',
      }}
    >
      {children}
    </button>
  );
};
