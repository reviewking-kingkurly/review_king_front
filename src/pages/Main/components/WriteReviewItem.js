import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const WriteReviewItem = ({ id, name, thumbnail }) => {
  const navigate = useNavigate();
  const goToReviewWrite = product_id => {
    navigate(`/review_write/${product_id}`);
  };

  return (
    <ReviewItemBox>
      <RectangleImg src={thumbnail} />
      <ProductNameWrapper>
        <ProductName>{name}</ProductName>
      </ProductNameWrapper>
      <ReviewButton onClick={() => goToReviewWrite(id)} variant="outlined">
        리뷰 작성하기
      </ReviewButton>
    </ReviewItemBox>
  );
};

export default WriteReviewItem;

const ProductNameWrapper = styled('div')`
  margin-top: 0.75rem;
  height: 4rem;
`;

const ReviewItemBox = styled(Box)`
  margin-right: 1.125rem;

  &:last-child {
    margin-right: 0;
  }
`;

const RectangleImg = styled('img')`
  width: 9rem;
  height: 9rem;
  border-radius: 8px;
  object-fit: cover;
`;

const ProductName = styled('div')`
  width: 9rem;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const ReviewButton = styled(Button)`
  box-sizing: border-box;
  border-radius: 0;
  font-size: 12px;
  font-weight: 600;
  width: 9rem;
  height: 2.25rem;
  color: #5e0080;
  background: #ffffff;
  margin-bottom: 2rem;
  border: 1px solid #5e0080;

  &:hover {
    color: #ffffff;
    background-color: #5e0080;
    opacity: 0.8;
  }
`;
