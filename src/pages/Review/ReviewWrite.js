/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IP } from '../../config';
import { Navigate } from 'react-router-dom';

const ReviewWrite = () => {
  const [mockOrdered, setMockOrdered] = useState('');
  const [input, setInput] = useState('');
  const [inputImages, setInputImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);
  const {
    order_number,
    product_id,
    product_name,
    product_description,
    product_quantity,
    product_thumbnail,
    delivery_date,
    order_status,
    product_purchased_with,
  } = mockOrdered;

  useEffect(() => {
    const ordered_item_id = 26;
    fetch(`${IP}reviews/write/${ordered_item_id}`, {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE2NjEyNDgxNDN9.GppFa9l02yO-MTiHKVOyBA6_hWPD3wT93wGM9H4U0lE',
      },
    })
      .then(res => res.json())
      .then(data => {
        setMockOrdered(data.results);
        // if (!(data => data.results === '')) {
        //   setMockOrdered(data.results);
        // }
      });
  }, []);

  // form - data;
  // 필수 값 : product_id, content
  // 그 이외 필수값 X : files, product_id_purchased_with

  console.log(inputImages[0]);

  const submitReview = () => {
    const formData = new FormData();
    formData.append('product_id', product_id);
    formData.append('content', input);
    for (let i = 0; i < inputImages.length; i++) {
      formData.append('files', inputImages[i], inputImages[i].name);
    }
    for (let i = 0; i < relatedItems.length; i++) {
      formData.append('product_id_purchased_with', relatedItems[i]);
    }

    fetch(`${IP}reviews`, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE2NjEyNDgxNDN9.GppFa9l02yO-MTiHKVOyBA6_hWPD3wT93wGM9H4U0lE',
      },
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'THE_REVIEW_ALREADY_EXISTS') {
          alert('이미 작성 된 리뷰가 있습니다.');
          // Navigate('/');
        }
        if (data.message === 'SUCCESS') {
          alert('리뷰 작성이 완료되었습니다.');
          // Navigate('/');
        }
      });
  };

  const handleImages = e => {
    const imageLists = e.target.files;
    let imageUrlLists = [...previewImages];
    let imageList = [...inputImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
      imageList.push(imageLists[i]);
    }
    if (imageUrlLists.length > 10) {
      alert('최대 첨부 사진은 10장을 넘을 수 없습니다.');
      imageUrlLists = imageUrlLists.slice(0, 10);
      imageList = imageList.slice(0, 10);
    }
    setPreviewImages(imageUrlLists);
    setInputImages(imageList);
  };

  const deleteImage = id => {
    setPreviewImages(previewImages.filter((_, index) => index !== id));
    setInputImages(inputImages.filter((_, index) => index !== id));
  };

  const addRelatedItems = id => {
    let itemList = [...relatedItems];
    itemList.push(id);
    setRelatedItems(itemList);
  };

  const removeRelatedItems = id => {
    let newArr = [];
    newArr = relatedItems.filter(el => el !== id);
    setRelatedItems(newArr);
  };

  const checkRelatedItems = id => {
    relatedItems.includes(id) ? removeRelatedItems(id) : addRelatedItems(id);
  };

  return (
    <BackGround>
      <Wrapper>
        {mockOrdered && (
          <ContentWrapper>
            <OrderTitle>주문번호 {order_number}</OrderTitle>
            <Product>
              <ImgWrapper src={product_thumbnail} />
              <DescriptionWrapper>
                <ProductName>{product_name}</ProductName>
                <Description>{product_description}</Description>
                <Amount>{product_quantity} 개</Amount>
                <DeliveryDate>
                  {`${delivery_date[0].substr(
                    5,
                    2
                  )}월 ${delivery_date[0].substr(8, 2)}일`}
                  <span>{order_status}</span>
                </DeliveryDate>
              </DescriptionWrapper>
            </Product>
            <InputWrapper>
              <InputBox
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="자세한 후기는 다른 고객의 구매에 많은 도움이 되며,&#13;&#10;일반식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성 시 검토 후 비공개 조치될 수 있습니다.&#13;&#10;반품/환불 문의는 1:1 문의로 가능합니다."
              />
              <InputLength>{input.length} 자 / 최소 10 자</InputLength>
            </InputWrapper>
            <PhotoWrapper>
              <Photo>
                <PreviewWrapper>
                  {previewImages.map((image, id) => (
                    <PreviewCard key={id}>
                      <PreviewImage src={image} alt={`${image}-${id}`} />
                      <ImageDeleteButton onClick={() => deleteImage(id)}>
                        x
                      </ImageDeleteButton>
                    </PreviewCard>
                  ))}
                  {inputImages.length === 10 || (
                    <label htmlFor="image" onChange={handleImages}>
                      <input
                        multiple
                        type="file"
                        id="image"
                        accept="image/jpg,image/png,image/jpeg"
                        encType="multipart/form-data"
                        style={{ display: 'none' }}
                      />
                      사진추가
                    </label>
                  )}
                </PreviewWrapper>
                <PhotoGuideText>
                  구매한 상품이 아니거나 캡쳐 사진을 첨부할 경우, 통보없이 삭제
                  및 적립 혜택이 취소됩니다.
                </PhotoGuideText>
                <PhotoLength>{inputImages.length} 장 / 최대 10 장</PhotoLength>
              </Photo>
            </PhotoWrapper>
            <Related>
              <h3>
                같이 구매했던 상품이에요. 다른 고객님들께 연관 상품으로
                추천할까요?
              </h3>
              <ProductWrapper>
                {product_purchased_with.map(
                  ({
                    product_id,
                    product_name,
                    product_thumbnail,
                    product_price,
                  }) => (
                    <ProductBox
                      key={product_id}
                      onClick={() => checkRelatedItems(product_id)}
                      isChecked={
                        relatedItems.includes(product_id) ? true : false
                      }
                    >
                      <ImgBox alt="product image" src={product_thumbnail} />
                      <ContentBox>
                        <ContentName>{product_name}</ContentName>
                        <ContentPrice>
                          {product_price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                          원
                        </ContentPrice>
                      </ContentBox>
                    </ProductBox>
                  )
                )}
              </ProductWrapper>
            </Related>
            <SubmitButton
              disabled={input.length > 10 ? false : true}
              onClick={submitReview}
            >
              등록하기
            </SubmitButton>
          </ContentWrapper>
        )}
      </Wrapper>
    </BackGround>
  );
};

export default ReviewWrite;

const SubmitButton = styled.button`
  ${({ theme }) => theme.flex.flexBox}
  width: 100%;
  height: 3.25rem;
  margin-top: 4.5rem;
  border: none;
  color: white;
  background-color: #5e0080;
  cursor: pointer;
  transition: ease-in-out 150ms;

  &:disabled {
    border: 1px solid #ccc;
    color: #ccc;
    background-color: white;

    &:hover {
      opacity: 1;
      cursor: not-allowed;
    }
  }

  &:hover {
    opacity: 0.5;
  }
`;

const Related = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 2rem 0;
  }
`;

const ProductWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'flex-start')}
  width: 100%;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ProductBox = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'flex-start')}
  width: 15.625rem;
  border: 1px solid #eee;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  background-color: white;
  cursor: pointer;
  margin-right: 1rem;
  transition: ease-in-out 150ms;

  &:hover {
    opacity: 0.5;
  }

  &:last-child {
    margin-right: 0;
  }

  ${props =>
    props.isChecked === true &&
    css`
      background-color: rgb(94, 0, 128, 0.05);
      box-shadow: 0 0 6px rgb(94, 0, 128, 0.05);
      border: 1px solid rgb(94, 0, 128);
      opacity: 0.6;
    `}
`;

const ImgBox = styled.img`
  ${({ theme }) => theme.flex.flexBox}
  background-color: #eee;
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.5rem;
  object-fit: cover;
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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const ContentPrice = styled.div`
  position: absolute;
  bottom: 1.125rem;
  font-size: 14px;
  font-weight: bold;
  color: #5e0080;
`;

const PhotoWrapper = styled.section`
  position: relative;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 2rem 0;
`;

const Photo = styled.div`
  button {
    border-radius: 0.25rem;
    border: 1px solid #ddd;
    width: 6.25rem;
    height: 6.25rem;
    font-size: 18px;
    color: #ccc;
    background-color: #eee;
    cursor: pointer;
    transition: ease-in-out 150ms;

    &:hover {
      opacity: 0.5;
    }
  }

  div {
    font-size: 12px;
    color: #ccc;
  }
`;

const PhotoGuideText = styled.div`
  margin-top: 0.75rem;
`;

const PhotoLength = styled.span`
  ${({ theme }) => theme.flex.flexBox('', '', 'flex-end')}
  margin-top: 0.75rem;
  font-size: 12px;
  font-weight: 600;
  color: #333;
`;

const PreviewWrapper = styled.section`
  ${({ theme }) => theme.flex.flexBox('', '', 'flex-start')}
  overflow-x: scroll;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  label {
    ${({ theme }) => theme.flex.flexBox}
    border: 1px solid purple;
    cursor: pointer;
    width: 6.25rem;
    height: 6.25rem;
    aspect-ratio: 1/1;
    border-radius: 0.25rem;
    transition: ease-in-out 150ms;
    opacity: 0.4;
    color: purple;
    background-color: ${({ theme }) => theme.colors.BackGround};
    font-size: 14px;

    &:hover {
      opacity: 1;
    }
  }
`;

const PreviewCard = styled.div`
  position: relative;
  width: 6.25rem;
  height: 6.25rem;
  margin-right: 0.5rem;
`;

const PreviewImage = styled.img`
  border: 1px solid #eee;
  border-radius: 0.25rem;
  width: 6.25rem;
  height: 6.25rem;
  overflow: hidden;
  object-fit: cover;
`;

const ImageDeleteButton = styled.span`
  ${({ theme }) => theme.flex.flexBox}
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  background-color: #eee;
  opacity: 0.8;
  color: #bbb;
  cursor: pointer;
  transition: ease-in-out 150ms;

  &:hover {
    opacity: 0.5;
  }
`;

const InputWrapper = styled.section`
  position: relative;
  margin: 3.25rem 0;
`;

const InputBox = styled.textarea`
  width: 11.375rem;
  width: 100%;
  height: 13.438rem;
  word-wrap: break-word;
  word-break: break-all;
  padding: 1rem;
  border: 1px solid #ddd;
  resize: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 12px;
    color: #ccc;
    line-height: 1.4;
  }
`;

const InputLength = styled.div`
  position: absolute;
  right: 0;
  font-size: 12px;
  font-weight: 600;
  color: #333;
  margin-top: 0.75rem;
`;

const Product = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'flex-start')}

  position: relative;

  div {
    margin-bottom: 0;
  }
`;

const ImgWrapper = styled.img`
  ${({ theme }) => theme.flex.flexBox}
  width: 11.375rem;
  height: 11.375rem;
  margin-right: 2.5rem;
  background-color: #eee;
  object-fit: cover;
`;

const DescriptionWrapper = styled.div`
  padding: 0.25rem 0;
  width: 70%;
`;

const ProductName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
`;

const Description = styled.div`
  font-size: 14px;
  color: #ccc;
`;

const Amount = styled.div`
  font-size: 14px;
  color: #aaa;
  margin-top: 1.25rem;
`;

const DeliveryDate = styled.div`
  ${({ theme }) => theme.flex.flexBox}
  position: absolute;
  bottom: 0.25rem;
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
