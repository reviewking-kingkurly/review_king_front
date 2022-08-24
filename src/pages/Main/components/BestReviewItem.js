import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';

const BestReviewItem = ({ reviewId, product, price, review, thumbnail }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/review/${reviewId}`);
  };

  return (
    <ItemWrapper onClick={goToDetail}>
      <RectangleImg src={thumbnail} />
      <ReviewBox>
        <ItemTitle>{product}</ItemTitle>
        <Price>{price?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원</Price>
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
  margin-right: 1rem;

  :hover {
    cursor: pointer;
  }
`;

const RectangleImg = styled('img')`
  width: 9rem;
  height: 9rem;
  border-radius: 8px;
  object-fit: cover;
  aspect-ratio: 1/1;
`;

const ItemTitle = styled.h4`
  margin-top: 0.75rem;
  width: 7.25rem;
  height: 2.063rem;
  font-size: 13px;
  font-weight: bold;
  line-height: 1rem;
  margin-bottom: -0.2rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const ReviewBox = styled(Box)`
  padding: 0.325rem 1.25rem;
`;

const Price = styled.div`
  margin-top: 0.5rem;
  width: 3.313rem;
  height: 1.188rem;
  font-size: 14px;
  font-weight: bold;
  color: #5e0080;
`;

const Review = styled.article`
  margin-top: 0.75rem;
  font-size: 0.625rem;
  line-height: 0.875rem;

  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
