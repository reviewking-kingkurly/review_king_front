import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';

const ReviewPanelComponent = () => {
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
      <ReviewsContainer>
        <ReviewInfoBox>
          <UserName>
            <Rank label="라벤더" />
            <NickName>nickname</NickName>
          </UserName>
          <Date>2022-08-19</Date>
        </ReviewInfoBox>
        <ReviewImgBox>
          <ReviewImg src="/Mock_Rectangle.png" />
          <ReviewImg src="/Mock_Rectangle.png" />
          <ReviewImg src="/Mock_Rectangle.png" />
        </ReviewImgBox>
        <ReviewContentBox>
          그래놀라 진짜 진짜 좋아하는데~ 가격이 비싸서 항상 할인하는 제품만
          먹었어요 물론 컬리에서 파는 그래놀라는 모두 맛있는데 그래놀라 하우스는
          세일 한 적이 없어서 맨날 스쳐지나가는 제품이었죠,, 그런데 그냥 ㅋㅋ 큰
          맘 먹고 구매했어요!! 그것도 2통이나요~ 우와!!!(금액 후덜덜) 받고
          아껴먹어야지 했는데 하루 이틀 주말동안 거의 반 넘게 먹었네요!! 이런
          ,,, 이거 멈출 수 없는 맛 입니다 요거트 토핑하고도 너무 잘 어울리고
          그냥 먹어도 진짜 맛있어요~ 몸에 좋은 오트밀에 달달하고 몸에 좋은
          사양벌꿀과 올리고당이 단맛을 내고 있네요~^^ 그리고 무화과 아시죠??
          몸에 좋고 비싼데 ㅠㅠ 이거 큰 덩어리로 딱 하니 들어있네요 ㅠㅠ 가성비
          하나도 안 아까운 ㅠㅠ 사서도 먹는 말린 무화과가 이렇게 까지 ㅠㅠㅠ
          그것뿐만 아니라 해바라기씨 , 피칸 ,해바라기씨 아몬드 호두 그 비싼
          마카다미아까지!!!! 견과류 따로 사묵을 필요가 읍따!! 음 ,,, 이 만하면
          가격대비 구성 너무 좋은데요??? 그리고 쏙쏙 말린 크린베리가 들어있어서
          상큼한 맛을 돋아주고 레몬인지 유지맛이 난다고 생각했는데 레몬차s
          ??이게 뭔지는 모르겠지만 느끼함을 잡아주는 상큼함도 들어있네용~
          여러분도 맛있는 건강함을 그래놀라 하우스로 잡아보세요~^^
        </ReviewContentBox>
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
                <ItemTitle>[DOLE] 스위티오 실속 파인애플 700g(1통)</ItemTitle>
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
            <HelpfulButton variant="outlined">도움이 돼요 15</HelpfulButton>
          </ButtonBox>
        </HelpfulBox>
      </ReviewsContainer>
      <Divider
        sx={{
          mt: 3,
          mb: 3,
        }}
      />
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mb: 3,
          }}
        >
          <UserName>
            <Rank label="라벤더" />
            <NickName>nickname</NickName>
          </UserName>
          <Date>2022-08-19</Date>
        </Box>
        <Box
          sx={{
            display: 'flex',
            mb: 3,
          }}
        >
          <ReviewImg src="/Mock_Rectangle.png" />
          <ReviewImg src="/Mock_Rectangle.png" />
          <ReviewImg src="/Mock_Rectangle.png" />
        </Box>
        <ReviewContentBox>
          그래놀라 진짜 진짜 좋아하는데~ 가격이 비싸서 항상 할인하는 제품만
          먹었어요 물론 컬리에서 파는 그래놀라는 모두 맛있는데 그래놀라 하우스는
          세일 한 적이 없어서 맨날 스쳐지나가는 제품이었죠,, 그런데 그냥 ㅋㅋ 큰
          맘 먹고 구매했어요!! 그것도 2통이나요~ 우와!!!(금액 후덜덜) 받고
          아껴먹어야지 했는데 하루 이틀 주말동안 거의 반 넘게 먹었네요!! 이런
          ,,, 이거 멈출 수 없는 맛 입니다 요거트 토핑하고도 너무 잘 어울리고
          그냥 먹어도 진짜 맛있어요~ 몸에 좋은 오트밀에 달달하고 몸에 좋은
          사양벌꿀과 올리고당이 단맛을 내고 있네요~^^ 그리고 무화과 아시죠??
          몸에 좋고 비싼데 ㅠㅠ 이거 큰 덩어리로 딱 하니 들어있네요 ㅠㅠ 가성비
          하나도 안 아까운 ㅠㅠ 사서도 먹는 말린 무화과가 이렇게 까지 ㅠㅠㅠ
          그것뿐만 아니라 해바라기씨 , 피칸 ,해바라기씨 아몬드 호두 그 비싼
          마카다미아까지!!!! 견과류 따로 사묵을 필요가 읍따!! 음 ,,, 이 만하면
          가격대비 구성 너무 좋은데요??? 그리고 쏙쏙 말린 크린베리가 들어있어서
          상큼한 맛을 돋아주고 레몬인지 유지맛이 난다고 생각했는데 레몬차s
          ??이게 뭔지는 모르겠지만 느끼함을 잡아주는 상큼함도 들어있네용~
          여러분도 맛있는 건강함을 그래놀라 하우스로 잡아보세요~^^
        </ReviewContentBox>
        <RecommendationBox>
          <Recommendation>함께 구매한 제품</Recommendation>
          <Box
            sx={{
              display: 'flex',
              overflow: 'auto',
            }}
          >
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
                <ItemTitle>[DOLE] 스위티오 실속 파인애플 700g(1통)</ItemTitle>
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
          </Box>
        </RecommendationBox>
        <Box
          sx={{
            display: 'flex',
            justifySelf: 'flex-end',
          }}
        >
          <ButtonBox>
            <HelpfulButton variant="outlined">도움이 돼요 15</HelpfulButton>
          </ButtonBox>
        </Box>
      </Container>
      <Divider
        sx={{
          mt: 3,
          mb: 3,
        }}
      />
    </Container>
  );
};

export default ReviewPanelComponent;

const BottomHr = styled(Divider)`
  margin-bottom: 24px;
`;
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

const NickName = styled('p')`
  width: 58px;
  height: 20px;

  font-weight: 600;
  font-size: 12px;

  color: #000000;
`;

const Date = styled('p')`
  width: 90px;
  height: 14px;
  margin-top: 1px;

  font-weight: 400;
  font-size: 13px;

  color: #cccccc;
`;

const ProductReviewBox = styled(Box)`
  margin-bottom: 32px;
`;

const ReviewHeader = styled('p')`
  width: 300px;
  height: 25px;

  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  color: #000000;
`;

const ReviewSubText = styled('p')`
  width: 627px;
  height: 36px;

  font-weight: 500;
  font-size: 12px;
  line-height: 18px;

  color: #999999;
`;

const ReviewImg = styled('img')`
  margin-right: 12px;
`;

const ReviewContentBox = styled('p')`
  width: 888px;
  height: 120px;

  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  color: #333333;
`;

const RecommendationBox = styled(Box)`
  margin-top: 50px;
`;

const Recommendation = styled('p')`
  width: 98px;
  height: 19px;

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

const ItemTitle = styled('p')`
  width: 95px;
  height: 29px;

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

const ItemPrice = styled('p')`
  width: 42px;
  height: 15px;

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
