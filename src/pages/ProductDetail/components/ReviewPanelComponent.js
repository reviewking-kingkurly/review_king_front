import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import ReviewPanelContent from './ReviewPanelContent';

const ReviewPanelComponent = ({ reviews }) => {
  return (
    <Container>
      <ProductReviewBox>
        <ReviewHeader>PRODUCT REVIEW</ReviewHeader>
        <ReviewSubText>
          상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은
          사전동의 없이 담당 게시판으로 이동될 수 있습니다.
          <br />
          배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 1:1 문의에
          남겨주세요.
        </ReviewSubText>
      </ProductReviewBox>
      <BottomHr />
      {reviews?.map((item, index) => {
        return (
          <ReviewPanelContent
            key={index}
            username={item.user_name}
            date={item.created_at}
            content={item.content}
            img={item.review_image}
            rank={item.user_grade}
            liked={item.review_like}
          />
        );
      })}
    </Container>
  );
};

export default ReviewPanelComponent;

const BottomHr = styled(Divider)`
  margin-bottom: 24px;
`;

const ProductReviewBox = styled(Box)`
  /* margin-bottom: 32px; */
  margin: 2rem 0 1rem 0;
`;

const ReviewHeader = styled('div')`
  width: 300px;
  height: 25px;
  margin-bottom: 0.2rem;

  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  color: #000000;
`;

const ReviewSubText = styled('div')`
  width: 627px;
  height: 36px;

  font-weight: 500;
  font-size: 12px;
  line-height: 18px;

  color: #999999;
`;
