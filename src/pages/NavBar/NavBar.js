import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [gradeInfo, setGradeInfo] = useState({
    name: '',
    color: '',
  });

  const MEMBER_GRADE = [
    { id: 1, name: '일반', color: '#b1a9c6' },
    { id: 2, name: '프렌즈', color: '#d2beff' },
    { id: 3, name: '화이트', color: '#ba99e1' },
    { id: 4, name: '라벤더', color: '#a775d6' },
    { id: 5, name: '퍼플', color: '#875eb3' },
    { id: 6, name: '더퍼플', color: '#5f0080' },
  ];

  const logOut = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_grade');
    localStorage.removeItem('user_name');
    navigate('/login');
  };

  const goToMainFromLogo = () => {
    localStorage.getItem('access_token');
    navigate('/');
  };

  const getUserGrade = () => {
    if (localStorage.getItem('access_token')) {
      const grade = localStorage.getItem('user_grade');
      setUserName(localStorage.getItem('user_name'));
      setGradeInfo({
        ...gradeInfo,
        name: MEMBER_GRADE[grade - 1].name,
        color: MEMBER_GRADE[grade - 1].color,
      });
    }
  };

  useEffect(() => {
    getUserGrade();
  }, []);

  return (
    <Nav>
      <Logo onClick={goToMainFromLogo} alt="logo" src="/Logo.png" />
      <SearchWrapper>
        <SearchBar
          onClick={() => navigate('/search')}
          placeholder="검색어를 입력해주세요"
        />
      </SearchWrapper>
      <UserInfoWrapper>
        {gradeInfo && (
          <UserInfo>
            <UserGrade gradeColor={gradeInfo.color}>{gradeInfo.name}</UserGrade>
            <UserNickname>{userName}</UserNickname>
            <Logout onClick={logOut}>로그아웃</Logout>
          </UserInfo>
        )}
      </UserInfoWrapper>
    </Nav>
  );
};

export default NavBar;

const UserInfoWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox}
`;

const UserGrade = styled.span`
  ${({ theme }) => theme.flex.flexBox}
  background-color: ${props => props.gradeColor};
  color: white;
  border-radius: 50rem;
  padding: 1px 6px;
  font-size: 8px;
  font-weight: 600;
  margin-right: 0.25rem;
`;

const UserNickname = styled.span`
  ${({ theme }) => theme.flex.flexBox}
  ${({ theme }) => theme.flex.flexBox}
  font-size: 12px;
  font-weight: bold;
`;

const Nav = styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 'xl';
  height: 6.875rem;
  background: #ffffff;
  border-bottom: 1px solid #eee;
`;

const Logo = styled('img')`
  width: 11.313rem;
  height: 5.125rem;
  cursor: pointer;
`;

const SearchWrapper = styled.div``;

const SearchBar = styled.input`
  width: 21.875rem;
  height: 2.375rem;
  background: #f7f7f7;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

const UserInfo = styled(Box)`
  display: flex;
  align-items: center;
`;

const Logout = styled.span`
  ${({ theme }) => theme.flex.flexBox}
  width: 3.75rem;
  font-weight: 600;
  font-size: 0.75rem;
  color: #cccccc;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;
