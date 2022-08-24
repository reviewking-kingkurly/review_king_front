import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { IP } from '../../config';
import ReviewBoxComponent from './components/ReviewBoxComponent';
import ReviewPanelComponent from './components/ReviewPanelComponent';
import RelatedCategory from './components/RelatedCategory';
import BoughtTogetherComponent from './components/BoughtTogetherComponent';

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
  const { id } = useParams();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    axios.get(`${IP}products/${id}`).then(data => {
      setProductDetail(data.data.results);
    });
  }, [id]);

  const [boughtTogether, setBoughtTogether] = useState([]);
  useEffect(() => {
    axios.get(`${IP}products/${id}/purchased_prod`).then(data => {
      setBoughtTogether(data.data.results);
    });
  }, [id]);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get(`${IP}reviews/list/${id}`).then(data => {
      setReviews(data.data.results);
    });
  }, [id]);

  const productName = productDetail?.product_name;
  const productDesc = productDetail?.product_description;
  const productPrice = productDetail?.product_price;
  const productImg = productDetail?.product_thumbnail;
  const productId = productDetail?.product_id;

  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get(`${IP}products/${id}/related_cate`).then(data => {
      setCategory(data.data.results);
    });
  }, []);

  const [chipName, setChipName] = useState('');

  const getCategoryName = e => {
    const categoryName = e.target.innerText;
    setChipName(categoryName);
  };

  const getSubCategory = id => {
    axios
      .get(`${IP}products/${productId}/related_prod?sub_category=${id}`)
      .then(data => {
        console.log('getCategory', data);
        // setItemsList(data.data.results);
      });
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
              <PriceWon> 원</PriceWon>
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
              <Tab label="후기" {...a11yProps(1)} />
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
              <RelatedCategory
                productName={productName}
                productId={id}
                category={category}
                getCategoryName={getCategoryName}
              />
              <Divider
                sx={{
                  marginBottom: '2rem',
                }}
              />
              <BoughtTogetherComponent
                productId={productId}
                productName={productName}
                boughtTogether={boughtTogether}
              />
              <Divider
                sx={{
                  marginTop: '3.25rem',
                  marginBottom: '3.25rem',
                }}
              />
            </Container>
          </RecommendationPanel>
          <ReviewPanel value={value} index={1}>
            <ReviewPanelComponent reviews={reviews} />
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
  align-items: center;
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
const ProductNameBox = styled(Box)`
  height: 5rem;
  width: 9rem;
`;
const PriceBox = styled(Box)`
  width: 9rem;
`;

const ProductName = styled('div')`
  width: 25rem;
  height: 2.5rem;

  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2.063rem;

  color: #000000;
`;

const Description = styled('div')`
  width: 25rem;
  height: 1.188rem;

  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.188rem;

  color: #cccccc;
`;

const Price = styled('div')`
  display: inline-block;

  width: 5rem;
  height: 2.375rem;

  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2.375rem;

  color: #000000;
`;

const PriceWon = styled('div')`
  display: inline-block;

  width: 2rem;
  height: 1.563rem;

  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.563rem;

  color: #000000;
`;

const Hr = styled(Divider)`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const BottomContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 3.125rem;
`;

const TabBox = styled(Container)``;

const RecommendationPanel = styled(TabPanel)``;

const ReviewPanel = styled(TabPanel)``;
