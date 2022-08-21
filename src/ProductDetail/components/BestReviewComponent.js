import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';

const BestReviewComponent = () => {
  return (
    <BestReviewBox
      sx={{
        display: 'flex',
        alignItems: 'end',
      }}
    >
      <Box>
        <BestReview>&#128081; BEST 리뷰</BestReview>
        <Liked>도움 13</Liked>
        <Date>2022-08-19</Date>
        <ReviewBoxContent>
          후기를 반신반의하며 첫 구매를 했었는데 벌써 3통째 구매해서 먹고
          있어요!! 건강한 식단 관리를 위해 그릭 요거트 세계에 입문했는데
          그릭요거트 사실 맛있진 않더라고요ㅜㅜ 그래서 같이 먹을만한 토핑류를
          열심히 찾던 중 이 제품을 보게 됐는데 오 대박 성공적!!
        </ReviewBoxContent>
      </Box>
      <Box>
        <ReviewImg src="/Mock_Rectangle.png" />
      </Box>
    </BestReviewBox>
  );
};

export default BestReviewComponent;

const BestReviewBox = styled(Box)``;

const BestReview = styled('p')`
  display: inline-block;
  width: 100px;
  height: 16px;

  font-weight: 600;
  font-size: 15px;
  line-height: 16px;

  color: #000000;
`;

const Liked = styled('p')`
  display: inline-block;
  width: 40px;
  height: 14px;

  font-weight: 700;
  font-size: 12px;
  line-height: 12px;

  color: #999999;
`;

const Date = styled('p')`
  width: 100px;
  height: 12px;
  margin-top: 1px;

  font-weight: 400;
  font-size: 13px;
  line-height: 1px;

  color: #cccccc;
`;

const ReviewBoxContent = styled('p')`
  width: 415px;
  height: 42px;
  margin-right: 10px;

  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  color: #333333;
`;

const ReviewImg = styled('img')`
  width: 100px;
  height: 100px;

  border-radius: 4px;
`;
