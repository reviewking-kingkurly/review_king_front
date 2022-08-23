/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IP } from '../../config';

const ReviewPost = () => {
  const navigate = useNavigate();
  const [mockReview, setMockReview] = useState('');
  const [selectedImg, setSelectedImg] = useState('');
  const [liked, setLiked] = useState(false);
  const [prevLike, setPrevLike] = useState('');
  const [gradeInfo, setGradeInfo] = useState({
    name: '',
    color: '',
  });
  const {
    user_name,
    content,
    created_at,
    review_image,
    product_id,
    product_name,
    product_description,
    review_like,
    product_purchased_with,
  } = mockReview;

  useEffect(() => {
    const review_id = 57;
    fetch(`${IP}reviews/${review_id}`, {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE2NjEyNDgxNDN9.GppFa9l02yO-MTiHKVOyBA6_hWPD3wT93wGM9H4U0lE',
      },
    })
      .then(res => res.json())
      .then(data => {
        setMockReview(data.results);
        getUserGrade(data.results.user_grade);
        getUserLike(data.results.review_like_choice);
        setPrevLike(data.results.review_like);
        data.results.review_image === '' ||
          setSelectedImg(data.results.review_image[0]);
      });
  }, []);

  const MEMBER_GRADE = [
    { id: 1, name: '일반', color: '#b1a9c6' },
    { id: 2, name: '프렌즈', color: '#d2beff' },
    { id: 3, name: '화이트', color: '#ba99e1' },
    { id: 4, name: '라벤더', color: '#a775d6' },
    { id: 5, name: '퍼플', color: '#875eb3' },
    { id: 6, name: '더퍼플', color: '#5f0080' },
  ];

  const getUserLike = review_like_choice => {
    review_like_choice === '' || setLiked(false);
  };

  const getUserGrade = user_grade => {
    setGradeInfo({
      ...gradeInfo,
      name: MEMBER_GRADE[user_grade - 1].name,
      color: MEMBER_GRADE[user_grade - 1].color,
    });
  };

  const selected = e => {
    setSelectedImg(e.target.src);
  };

  const replaceName = name => {
    const index = 1;
    const replaceCharacter = '*';
    return (
      name.substr(0, index) +
      replaceCharacter +
      name.substr(index + replaceCharacter.length)
    );
  };

  const goToPage = id => {
    navigate(`/product/${id}`);
  };

  return (
    <BackGround>
      <ModalWrapper>
        <CloseButton>x</CloseButton>
        {mockReview && (
          <ContentWrapper>
            <TopSide>
              {review_image.length === 0 || (
                <ImgWrapper>
                  <BigImage alt="review image" src={selectedImg} />
                  <SmallImage>
                    {review_image.map(i => (
                      <ImageItem
                        key={i}
                        src={i}
                        alt="review image"
                        isSelected={selectedImg === i ? true : false}
                        onClick={selected}
                      />
                    ))}
                  </SmallImage>
                </ImgWrapper>
              )}
              <ReviewWrapper>
                <ProductWrapper>
                  <h3
                    onClick={() => {
                      goToPage(product_id);
                    }}
                  >
                    {product_name}
                  </h3>
                  <div
                    onClick={() => {
                      goToPage(product_id);
                    }}
                  >
                    {product_description}
                  </div>
                </ProductWrapper>
                <UserInfoWrapper>
                  {gradeInfo.name && (
                    <UserInfo>
                      <UserGrade>{gradeInfo.name}</UserGrade>
                      <UserNickname>{replaceName(user_name)}</UserNickname>
                    </UserInfo>
                  )}
                  <PostDate>{created_at.substr(0, 10)}</PostDate>
                </UserInfoWrapper>

                <ReviewContent>{content}</ReviewContent>
                <LikeButton
                  onClick={() => {
                    setLiked(prev => !prev);
                    liked === true && setPrevLike(prevLike - 1);
                    liked === false && setPrevLike(prevLike + 1);
                  }}
                >
                  {liked === true && <span>✓</span>} 도움이 돼요
                  <span>{review_like === 0 || `${prevLike}`}</span>
                </LikeButton>
              </ReviewWrapper>
            </TopSide>
            <BottomSide>
              <h4>함께 구매한 상품</h4>
              <ProductCardWrapper>
                {product_purchased_with.map(
                  ({
                    product_id,
                    product_name,
                    product_price,
                    product_thumbnail,
                  }) => (
                    <ProductCard
                      key={product_id}
                      value={product_id}
                      onClick={() => {
                        goToPage(product_id);
                      }}
                    >
                      <ProductCardImage
                        alt="product image"
                        src={product_thumbnail}
                      />
                      <ProductCardInfo>
                        <ProductName>{product_name}</ProductName>
                        <ProductPrice>
                          {product_price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                          원
                        </ProductPrice>
                      </ProductCardInfo>
                    </ProductCard>
                  )
                )}
              </ProductCardWrapper>
            </BottomSide>
          </ContentWrapper>
        )}
      </ModalWrapper>
    </BackGround>
  );
};

export default ReviewPost;

const CloseButton = styled.button`
  position: absolute;
  top: 2.375rem;
  right: 2.375rem;
`;

const TopSide = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'flex-start')}
  height: 23.75rem;
  margin-bottom: 3.25rem;
  position: relative;
`;

const BottomSide = styled.div``;

const ImgWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'space-between')}
  width: 30.125rem;
  height: 23.75rem;
  margin-right: 4.375rem;
`;

const BigImage = styled.img`
  ${({ theme }) => theme.flex.flexBox}
  height: 100%;
  aspect-ratio: 1 / 1;
  background-color: #eee;
  object-fit: cover;
`;

const SmallImage = styled.div`
  overflow-y: scroll;
`;

const ImageItem = styled.img`
  ${({ theme }) => theme.flex.flexBox}
  width: 5.75rem;
  height: 5.75rem;
  background-color: #eee;
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: ease-in-out 150ms;
  object-fit: cover;

  ${props =>
    props.isSelected === true &&
    css`
      opacity: 0.5;
    `}

  &:hover {
    opacity: 0.5;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ReviewWrapper = styled.div``;

const ProductWrapper = styled.div`
  width: 31rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ccc;

  div {
    font-size: 14px;
    color: #ccc;
    line-height: 1.2;
    cursor: pointer;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }
`;

const UserInfoWrapper = styled.div`
  margin: 2rem 0;
`;

const ReviewContent = styled.div`
  width: 31rem;
  height: 7.625rem;
  line-height: 1.5;
  font-size: 13px;
  color: #333;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const LikeButton = styled.button`
  min-width: 7.5rem;
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 12px;
  font-weight: 600;
  color: #5e0080;
  border: 1px solid #5e0080;
  padding: 0.75rem 1.375rem;
  background-color: white;
  cursor: pointer;
  transition: ease-in-out 150ms;

  &:hover {
    opacity: 0.5;
  }

  span {
    margin-left: 0.25rem;
  }
`;

const UserInfo = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'flex-start')}
  margin-bottom: 0.5rem;
`;

const UserGrade = styled.span`
  background-color: #a864d7;
  color: white;
  border-radius: 50rem;
  padding: 3px 6px;
  font-size: 8px;
  font-weight: 500;
  margin-right: 0.25rem;
`;

const UserNickname = styled.span`
  ${({ theme }) => theme.flex.flexBox}
  font-size: 12px;
  font-weight: bold;
`;

const PostDate = styled.div`
  font-size: 12px;
  color: #ccc;
`;

const ProductCardWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'flex-start')}
`;

const ProductCard = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'flex-start')}
  border: 1px solid #eee;
  width: 12.375rem;
  height: 4.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: ease-in-out 150ms;
  margin-right: 0.75rem;

  &:hover {
    opacity: 0.5;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const ProductCardImage = styled.img`
  ${({ theme }) => theme.flex.flexBox}
  height: 100%;
  aspect-ratio: 1/1;
  background-color: #eee;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const ProductCardInfo = styled.div`
  position: relative;
  width: 6.375rem;
  margin: 0.75rem 0.5rem;
`;

const ProductName = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #333;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const ProductPrice = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.purple};
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 0.75rem;
    line-height: 1.2;
    cursor: pointer;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

const ModalWrapper = styled.div`
  position: relative;
  /* width: 83.125rem; */
  height: 44.063rem;
  margin: 10vh;
  padding: 4.5rem 8.75rem;
  background-color: white;
`;

const BackGround = styled.div`
  ${({ theme }) => theme.flex.flexBox}
  background-color: #FCFAFF;
  opacity: 90%;
  width: 100vw;
  height: 100vh;
`;
