import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const CategoryReviewItem = () => {
  return (
    <Box sx={{ height: '13.75rem', width: '9rem', mr: '1.8rem' }}>
      <RectangleImg src="/Mock_Rectangle.png" />
      <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
      <Price sx={{ mt: '-0.625rem' }}>3,450원</Price>
    </Box>
  );
};

export default CategoryReviewItem;

const RectangleImg = styled('img')`
  width: 9rem;
  height: 9rem;
  border-radius: 8px;
`;

const Price = styled('p')`
  width: 3.313rem;
  height: 1.188rem;

  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.188rem;

  color: #5e0080;
`;

const ProductName = styled('p')`
  width: 9rem;
  height: 2.063rem;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;

  color: #333333;
`;
