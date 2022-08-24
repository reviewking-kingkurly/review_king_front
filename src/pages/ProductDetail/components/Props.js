import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CategoryReviewItem from '../../Main/components/CategoryReviewItem';

{
  /* 0: {sub_category_id: 35, sub_category_name: '우유', sub_category_count: 4, sub_category_share: 36}
1: {sub_category_id: 10, sub_category_name: '바나나', sub_category_count: 3, sub_category_share: 27}
2: {sub_category_id: 26, sub_category_name: '베이컨', sub_category_count: 2, sub_category_share: 18}
3: {sub_category_id: 34, sub_category_name: '밀가루', sub_category_count: 1, sub_category_share: 9}
4: {sub_category_id: 4, sub_category_name: '양파', sub_category_count: 1, sub_category_share: 9} */
}

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

const Props = ({ item, productId, index }) => {
  const [value, setValue] = React.useState(0);

  const subCategoryId = item.sub_category_id;
  const [itemsList, setItemsList] = useState([]);

  const getItemsData = id => {
    axios
      .get(
        `http://3.35.3.54:8000/products/${productId}/related_prod?sub_category=${id}`
      )
      .then(data => {
        console.log('getCategory', data.data.results);
        setItemsList(data.data.results);
        // alert(data.data);
      });
  };
  console.log('itemLIst', itemsList);
  return (
    <TabPanelContent key={index} value={value} index={index}>
      <PanelFlexBox>
        {/* <CategoryReviewItem
          product={item.product_name}
          img={item.product_thumbnail}
          productPrice={item.product_price}
        /> */}
        {item.sub_category_id}
      </PanelFlexBox>
    </TabPanelContent>
  );
};

export default Props;

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
