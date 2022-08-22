import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import BestReviewItem from '../Main/components/BestReviewItem';
import CategoryReviewItem from '../Main/components/CategoryReviewItem';
import axios from 'axios';
import ReviewBoxComponent from './components/ReviewBoxComponent';
import ReviewPanelComponent from './components/ReviewPanelComponent';

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
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/data/productDetail.json').then(data => {
      setProductDetail(data.data.result);
      console.log(data.data.result);
    });
  }, []);

  const productName = productDetail.product_name;
  const productDesc = productDetail.product_description;
  const productPrice = productDetail.product_price;
  const productImg = productDetail.product_thumbnail;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickChip = () => {
    console.log('clicked');
  };

  return (
    <ProductDetailContainer component="main" maxWidth="xl">
      <CssBaseline />
      <DescriptionWrapper maxWidth="lg">
        <ImgContainer maxWidth="lg">
          <ProductImg src={productImg} />
        </ImgContainer>
        <RightContainer maxWidth="lg">
          <DescriptionContainer maxWidth="lg">
            <ProductNameBox>
              <ProductName>{productName}</ProductName>
              <Description>{productDesc}</Description>
            </ProductNameBox>
            <PriceBox>
              <Price>{productPrice}</Price>
              <PriceWon>원</PriceWon>
            </PriceBox>
          </DescriptionContainer>
          <Hr />
          <ReviewBoxComponent />
        </RightContainer>
      </DescriptionWrapper>
      <BottomContainer>
        <TabBox sx={{ width: '100%' }}>
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
          <RecommendationPanel value={value} index={0}>
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
                  <BestReviewItemContainer
                    sx={{
                      maxWidth: 'xl',
                    }}
                  >
                    <BestReviewItem />
                    <BestReviewItem />
                    <BestReviewItem />
                    <BestReviewItem />
                  </BestReviewItemContainer>
                </ReviewWrapper>
              </Container>
              <Divider
                sx={{
                  marginTop: '3.25rem',
                  marginBottom: '3.25rem',
                }}
              />
            </Container>
          </RecommendationPanel>
          <ReviewPanel value={value} index={1}>
            <ReviewPanelComponent />
          </ReviewPanel>
        </TabBox>
      </BottomContainer>
    </ProductDetailContainer>
  );
};

export default ProductDetail;

const ProductDetailContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.188rem;
`;

const DescriptionWrapper = styled(Container)`
  display: flex;
`;

const ImgContainer = styled(Container)`
  margin-top: 2.25rem;
  margin-right: 0.625rem;
`;

const ProductImg = styled('img')`
  width: 430px;
  height: 552px;
`;

const RightContainer = styled(Container)``;
const DescriptionContainer = styled(Container)``;
const ProductNameBox = styled(Box)``;
const PriceBox = styled(Box)``;

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

const Hr = styled(Divider)`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const BottomContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const TabBox = styled(Container)``;

const RecommendationPanel = styled(TabPanel)``;

const ReviewPanel = styled(TabPanel)``;

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

const BestReviewItemContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 11.25rem;
  margin-left: -0.625rem;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ChartImg = styled('img')`
  width: 13.75rem;
  height: 13.75rem;
  margin-right: 2.375rem;
`;
