import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import OrderHistory from './components/OrderHistory';
import BestReviewItem from './components/BestReviewItem';
import CategoryReviewItem from './components/CategoryReviewItem';
import axios from 'axios';
import MockBarChart from '../ProductDetail/components/MockBarChart';

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

const Main = () => {
  const [bestReview, setBestReview] = useState([]);
  const [reviewRanking, setReviewRanking] = useState([]);
  const [category, setCategory] = useState([]);
  const [orderedItem, setOrderedItem] = useState([]);
  const [orderInfo, setOrderInfo] = useState([]);
  const [chipName, setChipName] = useState('');
  const [chartData, setChartData] = useState({});
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios
      .get('http://3.35.3.54:8000/reviews/write_list', {
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
      })
      .then(data => {
        setOrderedItem(data.data.results.product);
        setOrderInfo(data.data.results);
      });
  }, []);

  useEffect(() => {
    axios.get('http://3.35.3.54:8000/reviews/best').then(data => {
      setBestReview(data.data.results);
    });
  }, []);

  useEffect(() => {
    axios.get('http://3.35.3.54:8000/reviews/ranking').then(data => {
      setReviewRanking(data.data.results);
      setCategory(data.data.results);
    });
  }, []);

  const getCategoryName = e => {
    const categoryName = e.target.innerText;
    setChipName(categoryName);
  };

  return (
    <MainContainer component="main" maxWidth="lg">
      <CssBaseline />
      <Banner>
        <BannerImg src="/Banner.png" />
      </Banner>
      <MainContentContainer component="main">
        <WriteReview>
          <Heading>리뷰 작성하기 &#9997;</Heading>
          <SubText>BEST 후기 작성하고 적립금 받아가세요!</SubText>
          <ReviewWrapper>
            {orderInfo?.map((item, index) => {
              return (
                <OrderHistory
                  key={index}
                  orderDate={item.ordered_at}
                  orderNumber={item.order_number}
                  orderedItem={item.product}
                />
              );
            })}
          </ReviewWrapper>
        </WriteReview>
        <MainDivider />
        <BestReview>
          <Heading>금주의 BEST 리뷰 &#10024;</Heading>
          <SubText>최근 한 달간 구매 내역 기준</SubText>
          <ReviewWrapper>
            <BestReviewItems>
              {bestReview.map(item => {
                return (
                  <BestReviewItem
                    key={item.review_id}
                    product={item.product_name}
                    productId={item.product_id}
                    review={item.review_content}
                    thumbnail={item.product_thumbnail}
                    price={item.product_price}
                  />
                );
              })}
            </BestReviewItems>
          </ReviewWrapper>
        </BestReview>
        <MainDivider />
        <ReviewRanking>
          <Heading>카테고리 별 리뷰 순위 &#128202;</Heading>
          <SubText>최근 한 달간 누적 리뷰 수 기준</SubText>
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
                <MockBarChart category={category} />
                {/* <ChartImg src="/Chart.png" /> */}
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
                                productId={review.product_id}
                                productPrice={review.product_price}
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
          <MainDivider />
        </ReviewRanking>
      </MainContentContainer>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled(Container)`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainDivider = styled(Divider)`
  margin: 3.25rem 0;
`;

const Heading = styled('p')`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 0.938rem;
  margin-bottom: 0.063rem;
`;

const SubText = styled('p')`
  font-weight: 500;
  font-size: 0.75rem;
  color: #999999;
`;

const Banner = styled(Box)`
  margin-top: 1.875rem;
  margin-bottom: 3.125rem;
`;

const BannerImg = styled('img')`
  width: 65.625rem;
  height: 8.75rem;
`;

const MainContentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 65.625rem;
  height: 8.75rem;
`;

const WriteReview = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const ReviewWrapper = styled('div')`
  margin: 2rem 0 1.8rem -0.5rem;
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

const ReviewRanking = styled(Box)``;

const ReviewRankingWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 65.625rem;
  height: 20rem;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  margin: 2.2rem 0 1.8rem 0;
`;

const ChipContainer = styled(Container)`
  /* display: flex; */
  display: none;
  align-items: center;
  justify-content: space-between;
  height: 1.875rem;
  margin-left: -0.6rem;
`;

const CategoryChip = styled(Chip)`
  font-weight: 600;
  font-size: 0.625rem;

  width: 4.688rem;
  height: 1.688rem;

  color: #5e0080;
`;

const TopReviewWrapper = styled(Container)`
  display: flex;
  align-items: center;
  width: 65.625rem;
  height: 18.75rem;
  margin-left: -0.625rem;
`;

const TopReviewItems = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 49.5rem;
  height: 20rem;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ChartBox = styled(Box)`
  width: 13.75rem;
  height: 13.75rem;
  margin-right: 1.9rem;
`;

const ChartImg = styled('img')``;

const TabPanelContent = styled(TabPanel)`
  display: flex;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const PanelFlexBox = styled(Box)`
  display: flex;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
