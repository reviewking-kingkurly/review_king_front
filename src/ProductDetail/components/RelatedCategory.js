import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import CategoryReviewItem from '../../Main/components/CategoryReviewItem';
import MockDonutChart from './MockDonutChart';

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

const RelatedCategory = ({
  productId,
  productName,
  category,
  getCategoryName,
  relatedList,
}) => {
  const [value, setValue] = React.useState(0);
  const [itemsList, setItemsList] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log('real', category[0]?.sub_category_name);

  const getCategoryData = id => {
    axios
      .get(
        `http://3.35.3.54:8000/products/${productId}/related_prod?sub_category=${id}`
      )
      .then(data => {
        console.log(data);
        setItemsList(data.data.results);
      });
  };

  return (
    <CategoryContainer>
      <Heading>연관 카테고리도 살펴보고 가세요! ✨</Heading>
      <SubText>{productName}의 최근 한 달간 구매 내역 기준</SubText>
      <CategoryWrapper>
        <ChipsContainer>
          <CategoryStack direction="row" spacing={1} />
        </ChipsContainer>
        <ChartWrapper>
          <ChartBox>
            {/* <ChartImg src="/Doughnut.png" /> */}
            <MockDonutChart />
          </ChartBox>
          <CategoryItems>
            <Box sx={{ width: '100%' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                selected
                textColor="secondary"
                indicatorColor="secondary"
                variant="fullWidth"
              >
                {category?.map(
                  ({ index, sub_category_name, sub_category_id }) => {
                    return (
                      <Tab
                        onClick={() => {
                          // e.preventDefault();
                          getCategoryData(sub_category_id);
                        }}
                        label={sub_category_name}
                        {...a11yProps(index)}
                      />
                    );
                  }
                )}
              </Tabs>
            </Box>
            <Box>
              {itemsList?.map((item, index) => {
                console.log(item);
                return (
                  <TabPanelContent key={index} value={value} index={index}>
                    <PanelFlexBox>
                      <CategoryReviewItem
                        product={item.product_name}
                        img={item.product_thumbnail}
                        productPrice={item.product_price}
                      />
                    </PanelFlexBox>
                  </TabPanelContent>
                );
              })}
            </Box>
          </CategoryItems>
        </ChartWrapper>
      </CategoryWrapper>
    </CategoryContainer>
  );
};

export default RelatedCategory;

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

const CategoryContainer = styled(Box)``;

const CategoryWrapper = styled('div')`
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

const ChipsContainer = styled(Container)`
  /* display: flex; */
  display: none;
  align-items: center;
  justify-content: space-between;
  height: 1.875rem;
  margin-left: -0.6rem;
`;

const CategoryStack = styled(Stack)``;

const CategoryTab = styled(Chip)`
  font-weight: 600;
  font-size: 0.625rem;

  width: 4.688rem;
  height: 1.688rem;

  color: #5e0080;
`;

const ChartWrapper = styled(Container)`
  display: flex;
  align-items: center;
  width: 65.625rem;
  height: 18.75rem;
  margin-left: -0.625rem;
`;

const CategoryItems = styled(Container)`
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

const ChartImg = styled('img')`
  width: 13.75rem;
  height: 13.75rem;
  margin-right: 2.375rem;
`;
