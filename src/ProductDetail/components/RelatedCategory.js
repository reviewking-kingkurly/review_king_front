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
import CategoryReviewItem from '../../Main/components/CategoryReviewItem';
import axios from 'axios';

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
  productName,
  category,
  getCategoryName,
  reviewRanking,
}) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ReviewRanking>
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
                    <Tab label={item.sub_category_name} {...a11yProps(index)} />
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
    </ReviewRanking>
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

// const ChartImg = styled('img')``;

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
const MainDivider = styled(Divider)`
  margin: 3.25rem 0;
`;

const ChartImg = styled('img')`
  width: 13.75rem;
  height: 13.75rem;
  margin-right: 2.375rem;
`;
