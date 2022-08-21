import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

const GeneralReviewComponent = () => {
  return (
    <GeneralReviewBox
      sx={{
        display: 'flex',
        alignItems: 'end',
      }}
    >
      <Box>
        <Rank label="라벤더" />
        <GeneralReview>고객님의 리뷰</GeneralReview>
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
    </GeneralReviewBox>
  );
};

export default GeneralReviewComponent;

const GeneralReviewBox = styled(Box)``;

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

const Rank = styled(Chip)`
  width: 55px;
  height: 20px;
  margin-right: 5px;

  font-weight: 600;
  font-size: 10px;

  color: #ffffff;
  background-color: #a06ab4;
`;

const GeneralReview = styled('p')`
  display: inline-block;
  width: 100px;
  height: 16px;

  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  color: #000000;
`;
