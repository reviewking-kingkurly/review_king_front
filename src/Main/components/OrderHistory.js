import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import WriteReviewItem from './WriteReviewItem';

const OrderHistory = ({ orderDate, orderNumber, orderedItem }) => {
  // const [orderedItem, setOrderedItem] = useState([]);
  // const [orderInfo, setOrderInfo] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('http://10.58.4.207:8000/reviews/write_list', {
  //       headers: {
  //         Authorization: localStorage.getItem('access_token'),
  //       },
  //     })
  //     .then(data => {
  //       setOrderedItem(data.data.results[0].product);
  //       setOrderInfo(data.data.results[0]);
  //       console.log(data.data.results);
  //     });
  // }, []);

  const getDate = () => {
    const dateArr = orderDate.substr(0, 10).split('-');
    const year = dateArr[0];
    const month = dateArr[1];
    const day = dateArr[2];
    return `${year}년 ${month}월 ${day}일`;
  };

  // const orderDate = orderInfo.ordered_at;
  // const orderDateToStr =  getDate();
  // const orderNumber = orderInfo.order_number;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <AccordionTitle>
          <OrderDate>{getDate()}</OrderDate>
          <OrderNumber>주문번호 {orderNumber}</OrderNumber>
        </AccordionTitle>
      </AccordionSummary>
      <AccordionDetails>
        <ReviewItemContainer
          sx={{
            maxWidth: 'xl',
          }}
        >
          {orderedItem.map(item => {
            return (
              <WriteReviewItem
                key={item.product_id}
                name={item.product_name}
                thumbnail={item.product_thumbnail}
              />
            );
          })}
        </ReviewItemContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export default OrderHistory;

const AccordionTitle = styled(Box)``;

const OrderDate = styled(Typography)``;

const OrderNumber = styled('p')`
  font-weight: 500;
  font-size: 0.75rem;
  color: #999999;
`;

const ReviewItemContainer = styled(Container)`
  display: flex;
  height: 17.5rem;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
