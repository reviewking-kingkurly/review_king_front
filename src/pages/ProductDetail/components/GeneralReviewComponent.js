import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

const GeneralReviewComponent = ({ name, liked, content, img, date }) => {
  return (
    <GeneralReviewBox>
      <Box>
        <UserInfoBox>
          <Rank label="라벤더" />
          <GeneralReview>
            <UserName>{name}</UserName>고객님의 리뷰
          </GeneralReview>
          <Liked>도움 {liked}</Liked>
        </UserInfoBox>
        <Date>{date}</Date>
        <ReviewBoxContent>{content}</ReviewBoxContent>
      </Box>
      <Box>{img && <ReviewImg src={img} />}</Box>
    </GeneralReviewBox>
  );
};

export default GeneralReviewComponent;

const GeneralReviewBox = styled(Box)`
  display: flex;
  align-items: center;
`;

const UserInfoBox = styled(Box)`
  height: 2rem;
  margin-top: 1rem;
`;

const Liked = styled('div')`
  display: inline-block;
  width: 40px;
  height: 14px;

  font-weight: 700;
  font-size: 12px;
  line-height: 12px;

  color: #999999;
`;

const Date = styled('div')`
  width: 100px;
  height: 12px;
  margin: 0.2rem 0;

  font-weight: 400;
  font-size: 13px;
  line-height: 1px;

  color: #cccccc;
`;

const ReviewBoxContent = styled('div')`
  width: 415px;
  height: 42px;
  margin-right: 10px;
  margin-top: 1rem;

  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  color: #333333;
`;

const ReviewImg = styled('img')`
  width: 100px;
  height: 100px;

  border-radius: 4px;
`;

const Rank = styled(Chip)`
  width: 55px;
  height: 20px;
  margin-right: 5px;

  font-weight: 600;
  font-size: 10px;

  color: #ffffff;
  background-color: #a06ab4;
`;

const GeneralReview = styled('div')`
  display: inline-block;
  width: 125px;
  height: 20px;

  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  color: #000000;
`;

const UserName = styled('div')`
  display: inline;
  text-align: center;
`;
