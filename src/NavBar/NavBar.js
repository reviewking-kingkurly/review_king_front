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
  height: 6.875rem;

  background: #ffffff;
  border: 1px solid #eeeeee;
`;

const Logo = styled('img')`
  width: 11.313rem;
  height: 5.125rem;
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
`;
