import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BoughtTogetherItem from './BoughtTogetherItem';

const BoughtTogetherComponent = ({ productName, boughtTogether }) => {
  return (
    <BoughtTogether>
      <Heading>이 상품을 구매 한 고객님들의 선택 💡</Heading>
      <SubText>{productName}의 최근 한 달간 구매 내역 기준</SubText>
      <TogetherWrapper>
        <TogetherItems>
          {boughtTogether.map(item => {
            return (
              <BoughtTogetherItem
                key={item.review_id}
                product={item.product_name}
                thumbnail={item.product_thumbnail}
                price={item.product_price}
              />
            );
          })}
        </TogetherItems>
      </TogetherWrapper>
    </BoughtTogether>
  );
};

export default BoughtTogetherComponent;

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

const BoughtTogether = styled(Box)``;

const TogetherWrapper = styled('div')`
  margin-top: 2rem;
`;

const TogetherItems = styled(Container)`
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
