/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

const Search = () => {
  return (
    <BackGround>
      <ModalWrapper>Search</ModalWrapper>
    </BackGround>
  );
};

export default Search;

const ModalWrapper = styled.div`
  border: 1px solid black;
  margin: 10vh;
`;

const BackGround = styled.div`
  ${({ theme }) => theme.flex.flexBox}
  width: 100vh;
  height: 100vh;
`;
