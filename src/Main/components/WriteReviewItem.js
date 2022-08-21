import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const WriteReviewItem = () => {
  return (
    <Box sx={{ width: '9rem', mr: '1.125rem' }}>
      <RectangleImg src="/Mock_Rectangle.png" />
      <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
      <ReviewButton variant="outlined">리뷰 작성하기</ReviewButton>
    </Box>
  );
};

export default WriteReviewItem;

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
