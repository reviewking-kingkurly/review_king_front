import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const WriteReviewItem = ({ name, thumbnail }) => {
  return (
    <ReviewItemBox>
      <RectangleImg src={thumbnail} />
      <ProductName>{name}</ProductName>
      <ReviewButton variant="outlined">리뷰 작성하기</ReviewButton>
    </ReviewItemBox>
  );
};

export default WriteReviewItem;

const ReviewItemBox = styled(Box)`
  width: 9rem;
  margin-right: 1.4rem;
`;

const RectangleImg = styled('img')`
  width: 9rem;
  height: 9rem;
  border-radius: 8px;
`;

const ProductName = styled('p')`
  width: 9rem;
  height: 2.063rem;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;

  color: #333333;
`;

const ReviewButton = styled(Button)`
  box-sizing: border-box;

  width: 9rem;
  height: 2rem;

  color: #5e0080;
  background: #ffffff;
  &:hover {
    color: #ffffff;
    background-color: #5e0080;
    opacity: 0.8;
  }
  border: 1px solid #5e0080;
`;
