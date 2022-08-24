/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { IP } from '../../config';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState();
  const [reviewList, setReviewList] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    fetch(`${IP}products/search`, {
      // headers: {
      //   Authorization: localStorage.getItem('token'),
      // },
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data.product);
        setReviewList(data.review);
      });
  }, []);

  return (
    <BackGround>
      <ModalWrapper>
        <CloseButton
        // onClick={() => navigate('/main')}
        >
          x
        </CloseButton>
        <ContentWrapper>
          <SearchBox
            value={value || ''}
            onChange={e => {
              setValue(e.target.value);
            }}
            placeholder="검색어를 입력해주세요"
          />
          {productList && value && (
            <ProductBox>
              <h3>상품 검색</h3>
              <ProductCardWrapper>
                {productList &&
                  productList
                    .filter(
                      list =>
                        list.product_name
                          .toLowerCase()
                          .includes(value.toLowerCase()) && list
                    )
                    .map(list => (
                      <ProductCard key={list.product_id}>
                        <ProductThumbnail thumbnail={list.product_thumbnail} />
                        <ProductName>{list.product_name}</ProductName>
                        <ProductPrice>
                          {list.product_price.replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            ','
                          )}{' '}
                          원
                        </ProductPrice>
                      </ProductCard>
                    ))}
              </ProductCardWrapper>
            </ProductBox>
          )}
          {reviewList && value && (
            <ReviewBox>
              <h3>리뷰 검색</h3>
              <ReviewContentWrapper>
                {reviewList &&
                  reviewList
                    .filter(
                      list =>
                        list.review_content
                          .toLowerCase()
                          .includes(value.toLowerCase()) && list
                    )
                    .map(list => (
                      <ReviewContent class="container" key={list.product_id}>
                        <ReviewProduct class="item">
                          {list.product_name}
                        </ReviewProduct>
                        <ReviewResult class="item">
                          {list.review_content}
                        </ReviewResult>
                      </ReviewContent>
                    ))}
              </ReviewContentWrapper>
            </ReviewBox>
          )}
        </ContentWrapper>
      </ModalWrapper>
    </BackGround>
  );
};

export default Search;

const CloseButton = styled.button`
  position: absolute;
  top: 2.375rem;
  right: 2.375rem;
`;

const ReviewBox = styled.div`
  overflow: scroll;
  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin: 0 0 2rem 0;
  }
`;

const ProductBox = styled.div`
  padding-bottom: 3.25rem;
  margin-bottom: 3.25rem;
  border-bottom: 1px solid #ccc;
  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin: 0 0 2rem 0;
  }
`;

const ProductCardWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'flex-start')}
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ReviewContentWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox('column', '', 'flex-start')}
  overflow-y: scroll;
  height: 8.75rem;
  cursor: pointer;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ReviewContent = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'flex-start')}
  display: grid;
  grid-template-columns: 1fr 4fr;
  font-size: 15px;
  margin-bottom: 0.5rem;
`;

const ReviewProduct = styled.div`
  margin-right: 1.125rem;
  font-weight: bold;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ReviewResult = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProductCard = styled.div`
  width: 9rem;
  margin-right: 1.125rem;
  &:last-child {
    margin-right: 0;
  }
`;

const ProductThumbnail = styled('div')`
  ${({ theme }) => theme.flex.flexBox}
  width: 9rem;
  height: 9rem;
  border-radius: 0.5rem;
  background-color: #eee;
  margin-bottom: 0.75rem;
  background-image: url(${props => props.thumbnail});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ProductName = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #333;
  line-height: 1.2;
  margin-bottom: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const ProductPrice = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #5e0080;
`;

const SearchBox = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #333;
  font-size: 24px;
  padding: 1rem 0;
  margin-bottom: 3.25rem;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #eee;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ModalWrapper = styled.div`
  position: relative;
  width: 83.125rem;
  height: 52.5rem;
  margin: 10vh;
  padding: 4.5rem 8.75rem;
  background-color: white;
`;

const BackGround = styled.div`
  ${({ theme }) => theme.flex.flexBox}
  background-color: #FCFAFF;
  opacity: 90%;
`;
