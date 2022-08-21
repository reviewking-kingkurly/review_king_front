import React from 'react';
import styled from '@emotion/styled';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/system';

const NavBar = () => {
  return (
    <Nav>
      <Logo src="/Logo.png" />
      <SearchBar placeholder="검색어를 입력해주세요" />
      <UserInfo>
        <UserName>
          <Rank label="라벤더" />
          <NickName>nickname</NickName>
        </UserName>
        <Logout>로그아웃</Logout>
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
  height: 110px;

  background: #ffffff;
  border: 1px solid #eeeeee;
`;

const Logo = styled('img')`
  width: 181px;
  height: 82px;
`;

const SearchBar = styled('input')`
  width: 350px;
  height: 38px;

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
  margin-right: 10px;
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

const NickName = styled('p')`
  width: 58px;
  height: 20px;

  font-weight: 600;
  font-size: 12px;

  color: #000000;
`;

const Logout = styled('button')`
  width: 60px;
  height: 20px;

  font-weight: 600;
  font-size: 12px;

  color: #cccccc;
  border: none;
  background-color: #ffffff;
`;
