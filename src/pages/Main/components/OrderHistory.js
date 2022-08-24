import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WriteReviewItem from './WriteReviewItem';

const OrderHistory = ({ orderedId, orderDate, orderNumber, orderedItem }) => {
  const getDate = () => {
    const dateArr = orderDate.substr(0, 10).split('-');
    let month = dateArr[1];
    const day = dateArr[2];

    if (month.substr(0, 1) === '0') {
      month = month.substr(1, 1);
    }
    return `${month}월 ${day}일`;
  };

  return (
    <Accordions defaultExpanded={true}>
      <AccordionBox
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <AccordionTitle>
          <OrderDate>{getDate()}</OrderDate>
          <OrderNumber>주문번호 {orderNumber}</OrderNumber>
        </AccordionTitle>
      </AccordionBox>
      <AccordionDetailBox>
        <ReviewItemContainer>
          {orderedItem.map(item => {
            return (
              <WriteReviewItem
                key={item.product_id}
                id={item.order_item_id}
                name={item.product_name}
                thumbnail={item.product_thumbnail}
              />
            );
          })}
        </ReviewItemContainer>
      </AccordionDetailBox>
    </Accordions>
  );
};

export default OrderHistory;

const AccordionDetailBox = styled(AccordionDetails)`
  margin: 0;
  padding: 0;
`;

const AccordionBox = styled(AccordionSummary)`
  padding: 0;
  margin: 0 0 0.5rem 0;
`;

const Accordions = styled(Accordion)`
  padding: 0.25rem 1.725rem;
  margin: 0;
  box-shadow: none;
  outline: 1px solid #eee;
  border-radius: 0;

  .MuiPaper-root .Mui-expanded {
    margin: 0;
  }
`;

const AccordionTitle = styled(Box)`
  margin: 0;
  padding: 0;
`;

const OrderDate = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const OrderNumber = styled('div')`
  font-weight: 500;
  font-size: 0.75rem;
  color: #999999;
  margin: 0;
  padding: 0;
`;

const ReviewItemContainer = styled(Container)`
  display: flex;
  overflow: auto;
  padding: 0;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 600px) {
    margin: 0;
    padding: 0;
  }
`;
