import React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

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
                  <Box sx={{ width: '9rem', mr: '1.125rem' }}>
                    <RectangleImg src="/Mock_Rectangle.png" />
                    <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                    <ReviewButton variant="outlined">
                      리뷰 작성하기
                    </ReviewButton>
                  </Box>
                  <Box sx={{ width: '144px', mr: '18px' }}>
                    <RectangleImg src="/Mock_Rectangle.png" />
                    <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                    <ReviewButton variant="outlined">
                      리뷰 작성하기
                    </ReviewButton>
                  </Box>
                  <Box sx={{ width: '144px', mr: '18px' }}>
                    <RectangleImg src="/Mock_Rectangle.png" />
                    <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                    <ReviewButton variant="outlined">
                      리뷰 작성하기
                    </ReviewButton>
                  </Box>
                  <Box sx={{ width: '144px', mr: '18px' }}>
                    <RectangleImg src="/Mock_Rectangle.png" />
                    <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                    <ReviewButton variant="outlined">
                      리뷰 작성하기
                    </ReviewButton>
                  </Box>
                  <Box sx={{ width: '144px', mr: '18px' }}>
                    <RectangleImg src="/Mock_Rectangle.png" />
                    <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                    <ReviewButton variant="outlined">
                      리뷰 작성하기
                    </ReviewButton>
                  </Box>

                  <Box sx={{ width: '144px', mr: '18px' }}>
                    <RectangleImg src="/Mock_Rectangle.png" />
                    <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                    <ReviewButton variant="outlined">
                      리뷰 작성하기
                    </ReviewButton>
                  </Box>
                  <Box sx={{ width: '144px', mr: '18px' }}>
                    <RectangleImg src="/Mock_Rectangle.png" />
                    <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                    <ReviewButton variant="outlined">
                      리뷰 작성하기
                    </ReviewButton>
                  </Box>
                </Container>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Box>
                  <Typography>8월 18일 주문</Typography>
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
                  <Box sx={{ width: '9rem', mr: '1.125rem' }}>
                    <RectangleImg src="/Mock_Rectangle.png" />
                    <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                    <ReviewButton variant="outlined">
                      리뷰 작성하기
                    </ReviewButton>
                  </Box>
                  <Box sx={{ width: '144px', mr: '18px' }}>
                    <RectangleImg src="/Mock_Rectangle.png" />
                    <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                    <ReviewButton variant="outlined">
                      리뷰 작성하기
                    </ReviewButton>
                  </Box>
                  <Box sx={{ width: '144px', mr: '18px' }}>
                    <RectangleImg src="/Mock_Rectangle.png" />
                    <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                    <ReviewButton variant="outlined">
                      리뷰 작성하기
                    </ReviewButton>
                  </Box>
                  <Box sx={{ width: '144px', mr: '18px' }}>
                    <RectangleImg src="/Mock_Rectangle.png" />
                    <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                    <ReviewButton variant="outlined">
                      리뷰 작성하기
                    </ReviewButton>
                  </Box>
                  <Box sx={{ width: '144px', mr: '18px' }}>
                    <RectangleImg src="/Mock_Rectangle.png" />
                    <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                    <ReviewButton variant="outlined">
                      리뷰 작성하기
                    </ReviewButton>
                  </Box>
                  <Box sx={{ width: '144px', mr: '18px' }}>
                    <RectangleImg src="/Mock_Rectangle.png" />
                    <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                    <ReviewButton variant="outlined">
                      리뷰 작성하기
                    </ReviewButton>
                  </Box>
                  <Box sx={{ width: '144px', mr: '18px' }}>
                    <RectangleImg src="/Mock_Rectangle.png" />
                    <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                    <ReviewButton variant="outlined">
                      리뷰 작성하기
                    </ReviewButton>
                  </Box>
                </Container>
              </AccordionDetails>
            </Accordion>
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
              <ItemWrapper>
                <RectangleImg src="/Mock_Rectangle.png" />
                <ReviewBox>
                  <ItemTitle>[DOLE] 스위티오 실속 파인애플 700g(1통)</ItemTitle>
                  <Price>3,450원</Price>
                  <Review>
                    파인애플 짱맛있어요 하와이안 피자 짱짱 파인애플 짱맛있어요
                    하와이안 피자 짱짱 파인애플 짱맛있어요 하와이안 피자 짱짱
                    파인애플 짱맛있어요 하와이안 피자 짱짱
                  </Review>
                </ReviewBox>
              </ItemWrapper>
              <ItemWrapper>
                <RectangleImg src="/Mock_Rectangle.png" />
                <ReviewBox>
                  <ItemTitle>[DOLE] 스위티오 실속 파인애플 700g(1통)</ItemTitle>
                  <Price>3,450원</Price>
                  <Review>
                    파인애플 짱맛있어요 하와이안 피자 짱짱 파인애플 짱맛있어요
                    하와이안 피자 짱짱 파인애플 짱맛있어요 하와이안 피자 짱짱
                    파인애플 짱맛있어요 하와이안 피자 짱짱
                  </Review>
                </ReviewBox>
              </ItemWrapper>
              <ItemWrapper>
                <RectangleImg src="/Mock_Rectangle.png" />
                <ReviewBox>
                  <ItemTitle>[DOLE] 스위티오 실속 파인애플 700g(1통)</ItemTitle>
                  <Price>3,450원</Price>
                  <Review>
                    파인애플 짱맛있어요 하와이안 피자 짱짱 파인애플 짱맛있어요
                    하와이안 피자 짱짱 파인애플 짱맛있어요 하와이안 피자 짱짱
                    파인애플 짱맛있어요 하와이안 피자 짱짱
                  </Review>
                </ReviewBox>
              </ItemWrapper>
              <ItemWrapper>
                <RectangleImg src="/Mock_Rectangle.png" />
                <ReviewBox>
                  <ItemTitle>[DOLE] 스위티오 실속 파인애플 700g(1통)</ItemTitle>
                  <Price>3,450원</Price>
                  <Review>
                    파인애플 짱맛있어요 하와이안 피자 짱짱 파인애플 짱맛있어요
                    하와이안 피자 짱짱 파인애플 짱맛있어요 하와이안 피자 짱짱
                    파인애플 짱맛있어요 하와이안 피자 짱짱
                  </Review>
                </ReviewBox>
              </ItemWrapper>
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
                <Box sx={{ height: '13.75rem', width: '9rem', mr: '1.125rem' }}>
                  <RectangleImg src="/Mock_Rectangle.png" />
                  <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                  <Price sx={{ mt: '-0.625rem' }}>3,450원</Price>
                </Box>
                <Box sx={{ height: '220px', width: '144px', mr: '18px' }}>
                  <RectangleImg src="/Mock_Rectangle.png" />
                  <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                  <Price sx={{ mt: '-10px' }}>3,450원</Price>
                </Box>
                <Box sx={{ height: '220px', width: '144px', mr: '18px' }}>
                  <RectangleImg src="/Mock_Rectangle.png" />
                  <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                  <Price sx={{ mt: '-10px' }}>3,450원</Price>
                </Box>
                <Box sx={{ height: '220px', width: '144px', mr: '18px' }}>
                  <RectangleImg src="/Mock_Rectangle.png" />
                  <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                  <Price sx={{ mt: '-10px' }}>3,450원</Price>
                </Box>
                <Box sx={{ height: '220px', width: '144px', mr: '18px' }}>
                  <RectangleImg src="/Mock_Rectangle.png" />
                  <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                  <Price sx={{ mt: '-10px' }}>3,450원</Price>
                </Box>
                <Box sx={{ height: '220px', width: '144px', mr: '18px' }}>
                  <RectangleImg src="/Mock_Rectangle.png" />
                  <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                  <Price sx={{ mt: '-10px' }}>3,450원</Price>
                </Box>
                <Box sx={{ height: '220px', width: '144px', mr: '18px' }}>
                  <RectangleImg src="/Mock_Rectangle.png" />
                  <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                  <Price sx={{ mt: '-10px' }}>3,450원</Price>
                </Box>
                <Box sx={{ height: '220px', width: '144px', mr: '18px' }}>
                  <RectangleImg src="/Mock_Rectangle.png" />
                  <ProductName>[홍루이젠] 대만 샌드위치 3종</ProductName>
                  <Price sx={{ mt: '-10px' }}>3,450원</Price>
                </Box>
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

const RectangleImg = styled('img')`
  width: 9rem;
  height: 9rem;
  border-radius: 8px;
`;

const ItemWrapper = styled(Box)`
  display: flex;
  align-items: start;
  text-overflow: ellipsis;
  width: 19.375rem;
  height: 9rem;
  max-width: md;
  margin-right: 1.125rem;

  background: #ffffff;
  border: 1px solid #eeeeee;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

const ReviewBox = styled(Box)`
  padding-left: 0.625rem;
  padding-right: 0.313rem;
`;

const ItemTitle = styled('p')`
  width: 8.75rem;
  height: 2.063rem;

  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;

  color: #333333;
`;

const Price = styled('p')`
  width: 3.313rem;
  height: 1.188rem;

  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.188rem;

  color: #5e0080;
`;

const Review = styled('p')`
  width: 8.75rem;
  height: 2.188rem;

  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.875rem;
  overflow-y: hidden;

  color: #333333;
`;

const ProductName = styled('p')`
  width: 9rem;
  height: 2.063rem;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;

  color: #333333;
`;

const ReviewButton = styled(Button)`
  box-sizing: border-box;

  width: 9rem;
  height: 2rem;

  color: #5e0080;
  background: #ffffff;
  &:hover {
    color: #ffffff;
    background-color: #5e0080;
    opacity: 0.8;
  }
  border: 1px solid #5e0080;
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
