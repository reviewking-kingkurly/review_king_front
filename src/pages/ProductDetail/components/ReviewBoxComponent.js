import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import BestReviewComponent from './BestReviewComponent';
import GeneralReviewComponent from './GeneralReviewComponent';

const ReviewBoxComponent = ({ reviews }) => {
  return (
    <ReviewContainer maxWidth="lg">
      <Box>
        <CurlyReview>컬리 리뷰</CurlyReview>
        <ReviewDescription>
          검증된 컬리 고객님들의 리뷰로 상품 구매에 참고해보세요
        </ReviewDescription>
      </Box>
      <ReviewBox>
        <BestReviewComponent />
        <Hr />
        {reviews?.map(item => {
          return (
            <>
              <GeneralReviewComponent
                key={item.id}
                name={item.user_name}
                liked={item.review_like}
                content={item.content}
                date={item.created_at.substr(0, 10)}
                img={item.review_image[0]}
              />
              <Hr />
            </>
          );
        })}
      </ReviewBox>
    </ReviewContainer>
  );
};

export default ReviewBoxComponent;

const ReviewContainer = styled(Container)``;

const CurlyReview = styled('div')`
  width: 64px;
  height: 22px;

  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: #000000;
`;

const ReviewDescription = styled('div')`
  width: 290px;
  height: 16px;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #999999;
`;

const ReviewBox = styled(Container)`
  width: 580px;
  height: 300px;
  padding-top: 8px;

  border: 1px solid #eeeeee;
  border-radius: 4px;

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Hr = styled(Divider)`
  margin-top: 8px;
  margin-bottom: 8px;
`;
