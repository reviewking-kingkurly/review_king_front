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

const OrderHistory = () => {
  const [orderedItem, setOrderedItem] = useState([]);
  const [orderInfo, setOrderInfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/data/orderHistory.json').then(data => {
      setOrderedItem(data.data.results[0].product);
      setOrderInfo(data.data.results[0]);
    });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/data/orderHistory.json', {
  //       Authorization: localStorage.getItem('access_token'),
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log({ data: data });
  //       setOrderedItem(data.results[0].product);
  //       setOrderInfo(data.results[0]);
  //     });
  // }, []);

  const getDate = () => {
    const dateArr = orderInfo.ordered_at.substr(0, 10).split('-');
    const year = dateArr[0];
    const month = dateArr[1];
    const day = dateArr[2];
    return `${year}년 ${month}월 ${day}일`;
  };

  // const orderDate = orderInfo.ordered_at;
  const orderDate = orderInfo.ordered_at && getDate();
  const orderNumber = orderInfo.order_number;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <AccordionTitle>
          <OrderDate>{orderDate}</OrderDate>
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
