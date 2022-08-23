import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { IP } from '../../config';

const NavBar = () => {
  const [gradeInfo, setGradeInfo] = useState({
    name: '',
    color: '',
  });

  const navigate = useNavigate();

  // TODO: nickname & grade
  const MEMBER_GRADE = [
    { id: 1, name: '일반', color: '#d' },
    { id: 2, name: '프렌즈', color: '#d2beff' },
    { id: 3, name: '화이트', color: '#ba99e1' },
    { id: 4, name: '라벤더', color: '#a775d6' },
    { id: 5, name: '퍼플', color: '#875eb3' },
    { id: 6, name: '더퍼플', color: '#5f0080' },
  ];

  const getUserGrade = user_grade => {
    setGradeInfo({
      ...gradeInfo,
      name: MEMBER_GRADE[user_grade - 1].name,
      color: MEMBER_GRADE[user_grade - 1].color,
    });
  };

  // useEffect(() => {
  //   fetch(`${IP}*`, {
  //     headers: {
  //       Authorization: localStorage.getItem('access_token'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       data.message === 'SUCCESS' && getUserGrade(data.results.user_grade);
  //     });
  // }, []);

  const logOut = () => {
    localStorage.removeItem('access_token');
  };

  const goToMain = () => {
    navigate('/');
  };

  return (
    <Nav>
      <Logo onClick={goToMain} alt="logo" src="/Logo.png" />
      <SearchBar placeholder="검색어를 입력해주세요" />
      <UserInfo>
        <UserName>
          {/* <Rank label="라벤더" /> */}
          <NickName>
            {/* {gradeInfo.name && (
              <UserInfo>
                <UserGrade>{gradeInfo.name}</UserGrade>
                <UserNickname>{replaceName(user_name)}</UserNickname>
              </UserInfo>
            )} */}
            nickname
          </NickName>
        </UserName>
        <Logout onClick={logOut}>로그아웃</Logout>
      </UserInfo>
    </Nav>
  );
};

export default NavBar;

const Nav = styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;

  max-width: 'xl';
  height: 6.875rem;

  background: #ffffff;
  border: 1px solid #eeeeee;
`;

const Logo = styled('img')`
  width: 11.313rem;
  height: 5.125rem;
  cursor: pointer;
`;

const SearchBar = styled('input')`
  width: 21.875rem;
  height: 2.375rem;

  background: #f7f7f7;
  border: 1px solid #eeeeee;
  border-radius: 6px;

  text-align: center;
`;

const UserInfo = styled(Box)`
  display: flex;
  align-items: center;
`;

const UserName = styled(Box)`
  display: flex;
  align-items: center;
  margin-right: 0.625;
`;

const Rank = styled(Chip)`
  width: 3.4rem;
  height: 1.25rem;
  margin-right: 0.3rem;

  font-weight: 600;
  font-size: 0.625rem;

  color: #ffffff;
  background-color: #a06ab4;
`;

const NickName = styled('p')`
  width: 3.625rem;
  height: 1.25rem;

  font-weight: 600;
  font-size: 0.75rem;

  color: #000000;
`;

const Logout = styled('button')`
  width: 3.75rem;
  height: 1.25rem;

  font-weight: 600;
  font-size: 0.75rem;

  color: #cccccc;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;
