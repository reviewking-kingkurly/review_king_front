import React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import OrderHistory from './components/OrderHistory';
import BestReviewItem from './components/BestReviewItem';
import CategoryReviewItem from './components/CategoryReviewItem';

const Main = () => {
  const handleClickChip = () => {
    console.log('clicked');
  };

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          marginBottom: 6,
        }}
      >
        <Banner src="/Banner.png" />
      </Box>
      <Container
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '65.625rem',
          height: '8.75rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Heading>리뷰 작성하기 &#9997;</Heading>
          <SubText>BEST 후기 작성하고 적립금 받아가세요!</SubText>
          <ReviewWrapper>
            <OrderHistory />
            <OrderHistory />
          </ReviewWrapper>
        </Box>
        <Divider
          sx={{
            marginTop: '3.25rem',
            marginBottom: '3.25rem',
          }}
        />
        <div>
          <Heading>금주의 BEST 리뷰 &#10024;</Heading>
          <SubText>최근 한 달간 구매 내역 기준</SubText>
          <ReviewWrapper>
            <Container
              sx={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: 'xl',
                height: '11.25rem',
                overflow: 'auto',
                marginLeft: '-0.625rem',
              }}
            >
              <BestReviewItem />
              <BestReviewItem />
              <BestReviewItem />
              <BestReviewItem />
            </Container>
          </ReviewWrapper>
        </div>
        <Divider
          sx={{
            marginTop: 3,
            marginBottom: 3,
          }}
        />
        <div>
          <Heading>카테고리 별 리뷰 순위 &#128202;</Heading>
          <SubText>최근 한 달간 누적 리뷰 수 기준</SubText>
          <ReviewWrapper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '65.625rem',
              height: '27.188rem',
              overflow: 'auto',
            }}
          >
            <Container
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: 'xl',
                height: '1.875rem',
              }}
            >
              <Stack direction="row" spacing={1}>
                <CategoryChip
                  label="고구마"
                  variant="outlined"
                  disabled
                  onClick={handleClickChip}
                />
                <CategoryChip
                  label="생선류"
                  variant="outlined"
                  onClick={handleClickChip}
                />
                <CategoryChip
                  label="돼지고기"
                  variant="outlined"
                  disabled
                  onClick={handleClickChip}
                />
                <CategoryChip
                  label="계랸류"
                  variant="outlined"
                  disabled
                  onClick={handleClickChip}
                />
              </Stack>
              <Box /> {/*pagination*/}
            </Container>
            <Container
              sx={{
                display: 'flex',
                width: '65.625rem',
                height: '18.75rem',
                overflow: 'auto',
                marginTop: '1.75rem',
                marginLeft: '-0.625rem',
              }}
            >
              <Box>
                <ChartImg src="/Chart.png" />
              </Box>
              <Container
                sx={{
                  width: '49.5rem',
                  height: '15.625rem',
                  display: 'flex',
                  overflow: 'auto',
                }}
              >
                <CategoryReviewItem />
                <CategoryReviewItem />
                <CategoryReviewItem />
                <CategoryReviewItem />
              </Container>
            </Container>
          </ReviewWrapper>
        </div>
      </Container>
    </Container>
  );
};

export default Main;

const Banner = styled('img')`
  width: 65.625rem;
  height: 8.75rem;
`;

const Heading = styled('p')`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 0.938rem;
  margin-bottom: 0.063rem;
`;

const SubText = styled('p')`
  font-weight: 500;
  font-size: 0.75rem;
  color: #999999;
`;

const ReviewWrapper = styled('div')`
  margin-top: 2rem;
`;

const CategoryChip = styled(Chip)`
  font-weight: 600;
  font-size: 0.625rem;

  width: 4.688rem;
  height: 1.688rem;

  color: #5e0080;
`;

const ChartImg = styled('img')`
  width: 13.75rem;
  height: 13.75rem;
  margin-right: 2.375rem;
`;
