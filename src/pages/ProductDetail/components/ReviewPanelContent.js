import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';

const ReviewPanelContent = ({ username, rank, date, img, liked, content }) => {
  const getRank = rank => {
    if (rank === 1) {
      return '더퍼플';
    } else if (rank === 2) {
      return '퍼플';
    } else if (rank === 3) {
      return '라벤더';
    } else if (rank === 4) {
      return '화이트';
    } else if (rank === 5) {
      return '프렌즈';
    } else return '일반';
  };

  return (
    <>
      <ReviewsContainer>
        <ReviewInfoBox>
          <UserName>
            <Rank label={getRank(rank)} />
            <NickName>{username}</NickName>
          </UserName>
          <Date>{date.substr(0, 10)}</Date>
        </ReviewInfoBox>
        <ReviewImgBox>
          {img !== [] &&
            img.map(src => {
              return <ReviewImg src={src} />;
            })}
        </ReviewImgBox>
        <ReviewContentBox>{content}</ReviewContentBox>
        <RecommendationBox>
          <Recommendation>함께 구매한 제품</Recommendation>
          <RecommendationWrapper>
            <ItemWrapper>
              <RectangleImg src="/Mock_Rectangle.png" />
              <RecommendationItem>
                <ItemTitle>[DOLE] 스위티오 실속 파인애플 700g(1통)</ItemTitle>
                <ItemPrice>3,450원</ItemPrice>
              </RecommendationItem>
            </ItemWrapper>
            <ItemWrapper>
              <RectangleImg src="/Mock_Rectangle.png" />
              <RecommendationItem>
                <ItemTitle>[홍루이젠] 대만 샌드위치 3종</ItemTitle>
                <ItemPrice>3,450원</ItemPrice>
              </RecommendationItem>
            </ItemWrapper>
            <ItemWrapper>
              <RectangleImg src="/Mock_Rectangle.png" />
              <RecommendationItem>
                <ItemTitle>[DOLE] 스위티오 실속 파인애플 700g(1통)</ItemTitle>
                <ItemPrice>3,450원</ItemPrice>
              </RecommendationItem>
            </ItemWrapper>
          </RecommendationWrapper>
        </RecommendationBox>
        <HelpfulBox>
          <ButtonBox>
            <HelpfulButton variant="outlined">
              도움이 돼요 {liked}
            </HelpfulButton>
          </ButtonBox>
        </HelpfulBox>
      </ReviewsContainer>
      <Divider
        sx={{
          mt: 5,
          mb: 5,
        }}
      />
    </>
  );
};

export default ReviewPanelContent;

const ReviewsContainer = styled(Container)``;

const ReviewInfoBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const ReviewImgBox = styled(Box)`
  display: flex;
  margin-bottom: 24px;
`;

const UserName = styled(Box)`
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 0.3rem;
  height: 1rem;
`;

const Rank = styled(Chip)`
  width: 55px;
  height: 20px;
  margin-right: 0.3rem;

  font-weight: 600;
  font-size: 10px;

  color: #ffffff;
  background-color: #a06ab4;
`;

const NickName = styled('div')`
  width: 58px;
  height: 20px;

  font-weight: 600;
  font-size: 12px;

  color: #000000;
`;

const Date = styled('div')`
  width: 90px;
  height: 14px;
  margin-top: 1px;

  font-weight: 400;
  font-size: 13px;

  color: #cccccc;
`;

const ReviewImg = styled('img')`
  margin-right: 12px;
  width: 9rem;
  height: 9rem;
  border-radius: 8px;
`;

const ReviewContentBox = styled('div')`
  width: 888px;
  padding-bottom: -2rem;

  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  color: #333333;
`;

const RecommendationBox = styled(Box)`
  margin-top: 50px;
`;

const Recommendation = styled('div')`
  width: 98px;
  height: 2rem;

  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  color: #000000;
`;

const RecommendationWrapper = styled(Box)`
  display: flex;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ItemWrapper = styled(Box)`
  display: flex;
  align-items: start;
  margin-right: 12px;

  width: 198px;
  height: 72px;
  overflow: hidden;

  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

const RectangleImg = styled('img')`
  width: 72px;
  height: 72px;

  border-radius: 8px;
`;

const ItemTitle = styled('div')`
  width: 95px;
  height: 29px;
  margin: 0.3rem 0 0.4rem 0;

  font-weight: 600;
  font-size: 10px;
  line-height: 14px;

  color: #333333;
`;

const RecommendationItem = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const ItemPrice = styled('div')`
  width: 42px;
  height: 15px;
  margin-top: 0.4rem;

  font-weight: 600;
  font-size: 11px;
  line-height: 1px;

  color: #5e0080;
`;

const HelpfulBox = styled(Box)`
  display: flex;
  justify-self: flex-end;
`;

const HelpfulButton = styled(Button)`
  width: 108px;
  height: 32px;

  background: #ffffff;
  border: 1px solid #5e0080;

  font-weight: 600;
  font-size: 10px;
  line-height: 14px;

  color: #5e0080;

  :hover {
    background: #5e0080;
    color: #ffffff;
    opacity: 0.7;
  }
`;

const ButtonBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
  width: 888px;
`;
