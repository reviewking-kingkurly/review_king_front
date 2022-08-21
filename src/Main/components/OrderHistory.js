import React from 'react';
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
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box>
          <Typography>8월 19일 주문</Typography>
          <SubText>주문번호 16234579790112</SubText>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Container
          sx={{
            display: 'flex',
            maxWidth: 'xl',
            height: '18.75rem',
            overflow: 'auto',
          }}
        >
          <WriteReviewItem />
          <WriteReviewItem />
          <WriteReviewItem />
          <WriteReviewItem />
          <WriteReviewItem />
          <WriteReviewItem />
        </Container>
      </AccordionDetails>
    </Accordion>
  );
};

export default OrderHistory;

const SubText = styled('p')`
  font-weight: 500;
  font-size: 0.75rem;
  color: #999999;
`;
