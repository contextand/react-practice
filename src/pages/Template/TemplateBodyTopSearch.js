import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import theme from '../../styles/theme';

const TemplateBodyTopSearch = () => {
  return (
    <S.SearchBox>
      <FaSearch className="icon" />
      <S.Text>템플릿 검색</S.Text>
    </S.SearchBox>
  );
};

export default TemplateBodyTopSearch;

const S = {
  SearchBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 300px;
    padding: 10px 20px;
    border: 1.5px solid ${theme.mainColor};
    cursor: pointer;
    .icon {
      margin-right: 5px;
      color: ${theme.mainColor};
    }
  `,
  Text: styled.p`
    font-size: 20px;
    font-weight: 900;
    color: ${theme.mainColor};
  `,
};
