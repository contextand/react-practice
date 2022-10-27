import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const TemplateBodyTopFilter = () => {
  return (
    <S.FilterBox>
      <S.FilterPopular>인기순</S.FilterPopular>
      <S.FilterTime>시간순</S.FilterTime>
    </S.FilterBox>
  );
};

export default TemplateBodyTopFilter;

const S = {
  FilterBox: styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 20px;
    font-weight: 900;
    color: ${theme.mainColor};
  `,
  FilterPopular: styled.p`
    cursor: pointer;
  `,
  FilterTime: styled.p`
    cursor: pointer;
  `,
};
