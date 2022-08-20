/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

const ReviewWrite = () => {
  return (
    <BackGround>
      <Wrapper>
        <ContentWrapper>
          <h3>주문번호</h3>
          <Product>product</Product>
          <InputBox>text</InputBox>
          <Photo>photo</Photo>
          <Related>product</Related>
          <button>등록하기</button>
        </ContentWrapper>
      </Wrapper>
    </BackGround>
  );
};

export default ReviewWrite;

const Related = styled.div``;

const Photo = styled.div``;

const InputBox = styled.div``;

const Product = styled.div``;

const ContentWrapper = styled.section`
  width: 100%;

  div {
    background-color: #eee;
    border: 1px solid black;
    margin-bottom: 1rem;
  }
`;

const Wrapper = styled.section`
  ${({ theme }) => theme.flex.flexBox('column')}
  border: 1px solid black;
  width: 65.625rem;
  padding: 1rem;
  margin: 1rem;
`;

const BackGround = styled.div`
  ${({ theme }) => theme.flex.flexBox}
`;
