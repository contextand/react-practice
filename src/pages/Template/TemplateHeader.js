import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const TemplateHeader = () => {
  return (
    <S.Wrap>
      <S.Title>뭐라고 쓸지 고민될 때</S.Title>
      <S.RegisterBtn>나도 템플릿 등록하기</S.RegisterBtn>
    </S.Wrap>
  );
};

export default TemplateHeader;

const S = {
  Wrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    background: ${theme.mainColor};
  `,
  Title: styled.h1`
    color: #fff;
    font-size: 40px;
    font-weight: 900;
    letter-spacing: -1px;
  `,
  RegisterBtn: styled.div`
    padding: 10px 20px;
    margin-top: 25px;
    font-weight: 900;
    font-size: 20px;
    color: ${theme.mainColor};
    background: white;
    border-radius: 5px;
    cursor: pointer;
  `,
};
