import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const RelatedCategoryItem = ({ price, product, img, productId }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/products/${productId}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <ReviewItemBox onClick={goToDetail}>
      <RectangleImg src={img} />
      <ProductName>{product}</ProductName>
      <Price>{price} 원</Price>
    </ReviewItemBox>
  );
};

export default RelatedCategoryItem;

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
  object-fit: cover;
`;

const Price = styled('div')`
  width: 3.313rem;
  height: 1.188rem;
  margin-top: 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.188rem;
  color: #5e0080;
`;

const ProductName = styled('div')`
  margin-top: 0.25rem;
  width: 9rem;
  height: 2.063rem;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
