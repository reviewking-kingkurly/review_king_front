import React from 'react';
import styled from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BestReviewItem from '../Main/components/BestReviewItem';
import CategoryReviewItem from '../Main/components/CategoryReviewItem';
import BestReviewComponent from './components/BestReviewComponent';
import GeneralReviewComponent from './components/GeneralReviewComponent';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ProductDetail = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickChip = () => {
    console.log('clicked');
  };

  return (
    <Container
      component="main"
      maxWidth="xl"
      sx={{
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            mt: '36px',
            mr: '10px',
          }}
        >
          <ProductImg src="/Mock_Product.png" />
        </Container>
        <Container maxWidth="lg">
          <Container maxWidth="lg">
            <Box>
              <ProductName>[네네린도] 평판 스크래쳐 2종</ProductName>
              <Description>알차게 사용하는 3단 스크래쳐</Description>
            </Box>
            <Box>
              <Price>7900</Price>
              <PriceWon>원~</PriceWon>
            </Box>
          </Container>
          <Hr />
          <Container maxWidth="lg">
            <Box>
              <CurlyReview>컬리 리뷰</CurlyReview>
              <ReviewDescription>
                검증된 컬리 고객님들의 리뷰로 상품 구매에 참고해보세요
              </ReviewDescription>
            </Box>
            <ReviewBox
              sx={{
                pt: 1,
              }}
            >
              <BestReviewComponent />
              <Hr />
              <GeneralReviewComponent />
              <Hr />
              <GeneralReviewComponent />
              <Hr />
            </ReviewBox>
          </Container>
        </Container>
      </Container>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: '50px',
        }}
      >
        <Container>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                selected
                textColor="secondary"
                indicatorColor="secondary"
                variant="fullWidth"
                aria-label="basic tabs example"
              >
                <Tab label="추천 상품" {...a11yProps(0)} selected />
                <Tab label="후기 (175)" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Container
                component="main"
                maxWidth="lg"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Container>
                  <Box>
                    <Heading>연관 카테고리도 살펴보고 가세요! ✨</Heading>
                    <SubText>
                      [네네린도] 평판 스크래쳐 2종의 최근 한 달간 구매 내역 기준
                    </SubText>
                  </Box>
                  <Box>
                    <ReviewWrapper
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '65.625rem',
                        height: '27.188rem',
                        overflow: 'auto',
                      }}
                    >
                      <Container
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          maxWidth: 'xl',
                          height: '1.875rem',
                        }}
                      >
                        <Stack direction="row" spacing={1}>
                          <CategoryChip
                            label="고구마"
                            variant="outlined"
                            disabled
                            onClick={handleClickChip}
                          />
                          <CategoryChip
                            label="생선류"
                            variant="outlined"
                            onClick={handleClickChip}
                          />
                          <CategoryChip
                            label="돼지고기"
                            variant="outlined"
                            disabled
                            onClick={handleClickChip}
                          />
                          <CategoryChip
                            label="계랸류"
                            variant="outlined"
                            disabled
                            onClick={handleClickChip}
                          />
                        </Stack>
                        <Box /> {/*pagination*/}
                      </Container>
                      <Container
                        sx={{
                          display: 'flex',
                          width: '65.625rem',
                          height: '18.75rem',
                          overflow: 'auto',
                          marginTop: '1.75rem',
                          marginLeft: '-0.625rem',
                        }}
                      >
                        <Box>
                          <ChartImg src="/Doughnut.png" />
                        </Box>
                        <Container
                          sx={{
                            width: '49.5rem',
                            height: '15.625rem',
                            display: 'flex',
                            overflow: 'auto',
                          }}
                        >
                          <CategoryReviewItem />
                          <CategoryReviewItem />
                          <CategoryReviewItem />
                          <CategoryReviewItem />
                        </Container>
                      </Container>
                    </ReviewWrapper>
                  </Box>
                </Container>
                <Divider
                  sx={{
                    marginBottom: 3,
                  }}
                />
                <Container>
                  <Box>
                    <Heading>이 상품을 구매 한 고객님들의 선택 💡</Heading>
                    <SubText>
                      [네네린도] 평판 스크래쳐 2종의 최근 한 달간 구매 내역 기준
                    </SubText>
                  </Box>
                  <ReviewWrapper>
                    <Container
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        maxWidth: 'xl',
                        height: '11.25rem',
                        overflow: 'auto',
                        marginLeft: '-0.625rem',
                      }}
                    >
                      <BestReviewItem />
                      <BestReviewItem />
                      <BestReviewItem />
                      <BestReviewItem />
                    </Container>
                  </ReviewWrapper>
                </Container>
                <Divider
                  sx={{
                    marginTop: '3.25rem',
                    marginBottom: '3.25rem',
                  }}
                />
              </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Container>
                <Box>
                  <p>PRODUCT REVIEW</p>
                  <p>
                    상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과
                    다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
                  </p>
                  <p>
                    배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 1:1
                    문의에 남겨주세요.
                  </p>
                </Box>
                <hr />
                <Container>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <UserName>
                      <Rank label="라벤더" />
                      <NickName>nickname</NickName>
                    </UserName>
                    <p>2022-08-19</p>
                  </Box>
                  <Box>
                    <img src="/Mock_Rectangle.png" />
                    <img src="/Mock_Rectangle.png" />
                    <img src="/Mock_Rectangle.png" />
                  </Box>
                  <Box>
                    그래놀라 진짜 진짜 좋아하는데~ 가격이 비싸서 항상 할인하는
                    제품만 먹었어요 물론 컬리에서 파는 그래놀라는 모두 맛있는데
                    그래놀라 하우스는 세일 한 적이 없어서 맨날 스쳐지나가는
                    제품이었죠,, 그런데 그냥 ㅋㅋ 큰 맘 먹고 구매했어요!! 그것도
                    2통이나요~ 우와!!!(금액 후덜덜) 받고 아껴먹어야지 했는데
                    하루 이틀 주말동안 거의 반 넘게 먹었네요!! 이런 ,,, 이거
                    멈출 수 없는 맛 입니다 요거트 토핑하고도 너무 잘 어울리고
                    그냥 먹어도 진짜 맛있어요~ 몸에 좋은 오트밀에 달달하고 몸에
                    좋은 사양벌꿀과 올리고당이 단맛을 내고 있네요~^^ 그리고
                    무화과 아시죠?? 몸에 좋고 비싼데 ㅠㅠ 이거 큰 덩어리로 딱
                    하니 들어있네요 ㅠㅠ 가성비 하나도 안 아까운 ㅠㅠ 사서도
                    먹는 말린 무화과가 이렇게 까지 ㅠㅠㅠ 그것뿐만 아니라
                    해바라기씨 , 피칸 ,해바라기씨 아몬드 호두 그 비싼
                    마카다미아까지!!!! 견과류 따로 사묵을 필요가 읍따!! 음 ,,,
                    이 만하면 가격대비 구성 너무 좋은데요??? 그리고 쏙쏙 말린
                    크린베리가 들어있어서 상큼한 맛을 돋아주고 레몬인지 유지맛이
                    난다고 생각했는데 레몬차s ??이게 뭔지는 모르겠지만 느끼함을
                    잡아주는 상큼함도 들어있네용~ 여러분도 맛있는 건강함을
                    그래놀라 하우스로 잡아보세요~^^
                  </Box>
                  <Box>
                    <p>함께 구매한 제품</p>
                    <Box
                      sx={{
                        display: 'flex',
                        overflow: 'auto',
                      }}
                    >
                      <BestReviewItem />
                      <BestReviewItem />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifySelf: 'flex-end',
                    }}
                  >
                    <Button>도움이 돼요 15</Button>
                  </Box>
                </Container>
              </Container>
            </TabPanel>
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export default ProductDetail;

const ProductImg = styled('img')`
  width: 430px;
  height: 552px;
`;

const ProductName = styled('p')`
  width: 292px;
  height: 33px;

  font-weight: 600;
  font-size: 24px;
  line-height: 33px;

  color: #000000;
`;

const Description = styled('p')`
  width: 174px;
  height: 19px;

  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  color: #cccccc;
`;

const Price = styled('p')`
  display: inline-block;

  width: 72px;
  height: 38px;

  font-weight: 600;
  font-size: 28px;
  line-height: 38px;

  color: #000000;
`;

const PriceWon = styled('p')`
  display: inline-block;

  width: 27px;
  height: 25px;

  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  color: #000000;
`;

const CurlyReview = styled('p')`
  width: 64px;
  height: 22px;

  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: #000000;
`;

const ReviewDescription = styled('p')`
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

const CategoryChip = styled(Chip)`
  font-weight: 600;
  font-size: 0.625rem;

  width: 4.688rem;
  height: 1.688rem;

  color: #5e0080;
`;

const Heading = styled('p')`
  width: 274px;
  height: 8px;

  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  color: #000000;
`;

const SubText = styled('p')`
  width: 296px;
  height: 8px;

  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  color: #999999;
`;

const ReviewWrapper = styled('div')`
  margin-top: 2rem;
`;

const ChartImg = styled('img')`
  width: 13.75rem;
  height: 13.75rem;
  margin-right: 2.375rem;
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
