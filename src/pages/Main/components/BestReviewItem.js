import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const BestReviewItem = ({ product, price, review, thumbnail, productId }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/products/${productId}`);
  };

  return (
    <ItemWrapper onClick={goToDetail}>
      <RectangleImg src={thumbnail} />
      <ReviewBox>
        <ItemTitle>{product}</ItemTitle>
        <Price>{price}원</Price>
        <Review>{review}</Review>
      </ReviewBox>
    </ItemWrapper>
  );
};

export default BestReviewItem;

const ItemWrapper = styled(Box)`
  display: flex;
  align-items: start;
  text-overflow: ellipsis;
  width: 19.375rem;
  height: 9rem;
  max-width: md;
  margin-right: 1.25rem;

  background: #ffffff;
  border: 1px solid #eeeeee;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  :hover {
    cursor: pointer;
  }
`;

const RectangleImg = styled('img')`
  width: 9rem;
  height: 9rem;
  border-radius: 8px;
`;

const ItemTitle = styled('p')`
  width: 8.75rem;
  height: 2.063rem;

  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: -0.2rem;

  color: #333333;
`;

const ReviewBox = styled(Box)`
  padding-left: 0.625rem;
  padding-right: 0.313rem;
`;

const Price = styled('p')`
  width: 3.313rem;
  height: 1.188rem;

  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.188rem;

  color: #5e0080;
`;

const Review = styled('p')`
  width: 8.75rem;
  height: 2.188rem;

  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.875rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  color: #333333;
`;
