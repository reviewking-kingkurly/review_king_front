/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

const ReviewWrite = () => {
  return (
    <BackGround>
      <Wrapper>
        <ContentWrapper>
          <OrderTitle>주문번호</OrderTitle>
          <Product>
            <ImgWrapper>img</ImgWrapper>
            <DescriptionWrapper>
              <ProductName>상품명</ProductName>
              <Description>상품설명</Description>
              <Amount>구매수량</Amount>
              <DeliveryDate>
                배송날짜 <span>배송현황</span>
              </DeliveryDate>
            </DescriptionWrapper>
          </Product>
          <InputBox
            placeholder="자세한 후기는 다른 고객의 구매에 많은 도움이 되며,&#13;&#10;일반식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성 시 검토 후 비공개 조치될 수 있습니다.&#13;&#10;반품/환불 문의는 1:1 문의로 가능합니다."
          />
          <Photo>
            <button>+</button>
            <div>
              구매한 상품이 아니거나 캡쳐 사진을 첨부할 경우, 통보없이 삭제 및
              적립 혜택이 취소됩니다.
            </div>
          </Photo>
          <Related>
            <h3>
              같이 구매했던 상품이에요. 다른 고객님들께 연관 상품으로
              추천할까요?
            </h3>
            <ProductBox>
              <ImgBox>img</ImgBox>
              <ContentBox>
                <ContentName>name</ContentName>
                <ContentPrice>price</ContentPrice>
              </ContentBox>
            </ProductBox>
          </Related>
          <SubmitButton>등록하기</SubmitButton>
        </ContentWrapper>
      </Wrapper>
    </BackGround>
  );
};

export default ReviewWrite;

const SubmitButton = styled.button`
  ${({ theme }) => theme.flex.flexBox}
  width: 100%;
  border: 1px solid #ccc;
  height: 3.25rem;
  margin-top: 4.5rem;
  color: #ccc;
  background-color: white;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #5e0080;
    border: none;
  }
`;

const Related = styled.div`
  h3 {
    margin: 2rem 0;
  }
`;

const ProductBox = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'flex-start')}
  width: 15.625rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background-color: white;
  cursor: pointer;
`;

const ImgBox = styled.span`
  ${({ theme }) => theme.flex.flexBox}
  background-color: #eee;
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.5rem;
`;

const ContentBox = styled.span`
  position: relative;
  width: 9.375rem;
  height: 6.25rem;
  padding: 1.125rem;
`;

const ContentName = styled.div`
  font-size: 12px;
  margin-bottom: 0.75rem;
  color: #333;
  font-weight: bold;
`;

const ContentPrice = styled.div`
  position: absolute;
  bottom: 1.125rem;
  font-size: 14px;
  font-weight: bold;
  color: #5e0080;
`;

const Photo = styled.div`
  padding: 2rem 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  button {
    border-radius: 0.25rem;
    border: 1px solid #ddd;
    width: 6.25rem;
    height: 6.25rem;
    font-size: 18px;
    color: #ccc;
    cursor: pointer;
  }

  div {
    padding: 0.75rem 0;
    font-size: 12px;
    color: #ccc;
  }
`;

const InputBox = styled.textarea`
  width: 100%;
  height: 13.438rem;
  word-wrap: break-word;
  word-break: break-all;
  margin: 3.25rem 0;
  padding: 1rem;
  border: 1px solid #ddd;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 12px;
    color: #ccc;
    line-height: 1.4;
  }
`;

const Product = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'flex-start')}

  position: relative;

  div {
    margin-bottom: 0;
  }
`;

const ImgWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox}
  width: 11.375rem;
  height: 11.375rem;
  margin-right: 2.5rem;
  background-color: #eee;
`;

const DescriptionWrapper = styled.div`
  width: 70%;
`;

const ProductName = styled.h3`
  margin: 0 0 0.75rem 0;
`;

const Description = styled.div`
  font-size: 14px;
  color: #ccc;
`;

const Amount = styled.div`
  font-size: 14px;
  color: #aaa;
  margin-top: 0.5rem;
`;

const DeliveryDate = styled.div`
  ${({ theme }) => theme.flex.flexBox}
  position: absolute;
  bottom: 0;
  color: #333;
  font-size: 18px;
  font-weight: bold;

  span {
    margin-left: 0.5rem;
    font-size: 12px;
    color: #5e0080;
  }
`;

const OrderTitle = styled.div`
  width: 100%;
  text-align: right;
  margin-bottom: 2rem;
  font-size: 12px;
  color: #aaa;
`;

const ContentWrapper = styled.section`
  width: 100%;
`;

const Wrapper = styled.section`
  ${({ theme }) => theme.flex.flexBox('column')}
  width: 65.625rem;
  padding: 1rem;
  margin: 1rem;
`;

const BackGround = styled.div`
  ${({ theme }) => theme.flex.flexBox}
`;
