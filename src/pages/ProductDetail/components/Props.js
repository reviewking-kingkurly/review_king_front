import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CategoryReviewItem from '../../Main/components/CategoryReviewItem';

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
  // console.log('what', item.sub_category_id, index);
  const [value, setValue] = React.useState(0);

  return (
    <TabPanelContent key={index} value={value} index={index}>
      <PanelFlexBox>{item.product_name}</PanelFlexBox>
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
