import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <S.Wrap>
      <S.Menu to="/template">템플릿 사이트, 어떻게 쓸까</S.Menu>
      <S.Menu to="/practice">리액트 연습장</S.Menu>
    </S.Wrap>
  );
};

export default Nav;

const S = {
  Wrap: styled.div`
    display: flex;
    gap: 25px;
    padding: 20px;
    background-color: #333;
  `,
  Menu: styled(Link)`
    color: #555;
  `,
};
