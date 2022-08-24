import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const CategoryReviewItem = ({ product, img, productId, productPrice }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/products/${productId}`);
  };
  return (
    <ReviewItemBox onClick={goToDetail}>
      <RectangleImg src={img} />
      <ProductName>{product}</ProductName>
      <Price>{productPrice}원</Price>
    </ReviewItemBox>
  );
};

export default CategoryReviewItem;

const ReviewItemBox = styled(Box)`
  height: 13.75rem;
  width: 9rem;
  margin-right: 1.25rem;
  :hover {
    cursor: pointer;
  }
`;

const RectangleImg = styled('img')`
  width: 9rem;
  height: 9rem;
  border-radius: 8px;
`;

const Price = styled('p')`
  width: 3.313rem;
  height: 1.188rem;
  margin-top: -0.625rem;

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
