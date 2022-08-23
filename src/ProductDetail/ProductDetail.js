import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import BestReviewItem from '../Main/components/BestReviewItem';
import axios from 'axios';
import ReviewBoxComponent from './components/ReviewBoxComponent';
import ReviewPanelComponent from './components/ReviewPanelComponent';
import RelatedCategory from './components/RelatedCategory';

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
  const [reviews, setReviews] = useState([]);

  const [bestReview, setBestReview] = useState([]);
  useEffect(() => {
    axios.get('http://10.58.4.207:8000/reviews/best').then(data => {
      setBestReview(data.data.results);
    });
  }, []);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/data/productDetail.json').then(data => {
  //     setProductDetail(data.data.result);
  //     console.log(data.data.result);
  //   });
  // }, []);

  useEffect(() => {
    axios.get('http://10.58.4.207:8000/products/2').then(data => {
      setProductDetail(data.data.results);
      console.log(data.data.results);
      console.log(productDetail);
    });
  }, []);

  useEffect(() => {
    axios.get('http://10.58.4.207:8000/reviews/list/241').then(data => {
      console.log('general review', data);
      setReviews(data.data.results);
    });
  }, []);

  const productName = productDetail?.product_name;
  const productDesc = productDetail?.product_description;
  const productPrice = productDetail?.product_price;
  const productImg = productDetail?.product_thumbnail;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [reviewRanking, setReviewRanking] = useState([]);
  const [category, setCategory] = useState([]);
  const [chipName, setChipName] = useState('');
  useEffect(() => {
    axios.get('http://10.58.4.207:8000/reviews/ranking').then(data => {
      setReviewRanking(data.data.results);
      console.log(data.data.results);
      setCategory(data.data.results);
    });
  }, []);

  const getCategoryName = e => {
    const categoryName = e.target.innerText;
    setChipName(categoryName);
    console.log(categoryName);
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
          <ReviewBoxComponent reviews={reviews} />
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
              {/* <ReviewRanking>
                <Heading>연관 카테고리도 살펴보고 가세요! ✨</Heading>
                <SubText>{productName}의 최근 한 달간 구매 내역 기준</SubText>
                <ReviewRankingWrapper>
                  <ChipContainer>
                    <Stack direction="row" spacing={1}>
                      {category?.map((item, index) => {
                        return (
                          <CategoryChip
                            key={index}
                            label={item.sub_category_name}
                            variant="outlined"
                            onClick={getCategoryName}
                          />
                        );
                      })}
                    </Stack>
                  </ChipContainer>
                  <TopReviewWrapper>
                    <ChartBox>
                      <ChartImg src="/Doughnut.png" />
                    </ChartBox>
                    <TopReviewItems>
                      <Box sx={{ width: '100%' }}>
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          selected
                          textColor="secondary"
                          indicatorColor="secondary"
                          variant="fullWidth"
                        >
                          {reviewRanking?.map((item, index) => {
                            return (
                              <Tab
                                label={item.sub_category_name}
                                {...a11yProps(index)}
                              />
                            );
                          })}
                        </Tabs>
                      </Box>
                      <Box>
                        {reviewRanking?.map((item, index) => {
                          return (
                            <TabPanelContent value={value} index={index}>
                              <PanelFlexBox>
                                {item?.product.map(review => {
                                  return (
                                    <CategoryReviewItem
                                      product={review.product_name}
                                      img={review.product_thumbnail}
                                    />
                                  );
                                })}
                              </PanelFlexBox>
                            </TabPanelContent>
                          );
                        })}
                      </Box>
                    </TopReviewItems>
                  </TopReviewWrapper>
                </ReviewRankingWrapper>
              </ReviewRanking> */}
              <RelatedCategory
                productName={productName}
                category={category}
                getCategoryName={getCategoryName}
                reviewRanking={reviewRanking}
              />
              <Divider
                sx={{
                  marginBottom: 3,
                }}
              />
              {/* <Container>
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
              </Container> */}
              <BestReview>
                <Heading>이 상품을 구매 한 고객님들의 선택 💡</Heading>
                <SubText>{productName}의 최근 한 달간 구매 내역 기준</SubText>
                <ReviewWrapper>
                  <BestReviewItems>
                    {bestReview.map(item => {
                      return (
                        <BestReviewItem
                          key={item.review_id}
                          product={item.product_name}
                          review={item.review_content}
                          thumbnail={item.product_thumbnail}
                          price={item.product_price}
                        />
                      );
                    })}
                  </BestReviewItems>
                </ReviewWrapper>
              </BestReview>
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
  width: 26.875rem;
  height: 34.5rem;
`;

const RightContainer = styled(Container)``;
const DescriptionContainer = styled(Container)``;
const ProductNameBox = styled(Box)``;
const PriceBox = styled(Box)``;

const ProductName = styled('p')`
  width: 18.25rem;
  height: 2.063rem;

  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2.063rem;

  color: #000000;
`;

const Description = styled('p')`
  width: 15rem;
  height: 1.188rem;

  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.188rem;

  color: #cccccc;
`;

const Price = styled('p')`
  display: inline-block;

  width: 4.5rem;
  height: 2.375rem;

  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2.375rem;

  color: #000000;
`;

const PriceWon = styled('p')`
  display: inline-block;

  width: 1.688rem;
  height: 1.563rem;

  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.563rem;

  color: #000000;
`;

const Hr = styled(Divider)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const BottomContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 3.125rem;
`;

const TabBox = styled(Container)``;

const RecommendationPanel = styled(TabPanel)``;

const ReviewPanel = styled(TabPanel)``;

const Heading = styled('p')`
  width: 17.125rem;
  height: 0.5rem;

  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.563rem;

  color: #000000;
`;

const SubText = styled('p')`
  width: 18.5rem;
  height: 0.5rem;

  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1rem;

  color: #999999;
`;

const ReviewWrapper = styled('div')`
  margin-top: 2rem;
`;

const BestReview = styled(Box)``;

const BestReviewItems = styled(Container)`
  display: flex;
  align-items: center;
  height: 11.25rem;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  margin-left: -0.625rem;
  margin-bottom: -1rem;
`;
