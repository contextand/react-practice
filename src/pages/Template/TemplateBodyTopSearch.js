import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import theme from '../../styles/theme';

const TemplateBodyTopSearch = () => {
  const [isKeyword, setIsKeyword] = useState(false);

  const handleKeyword = e => {
    setIsKeyword(cur => !cur);
  };

  return (
    <S.SearchBox onClick={handleKeyword}>
      <FaSearch className="icon" />
      <S.Text>템플릿 검색</S.Text>
      {isKeyword && (
        <S.KeywordBox>
          <S.KeywordList>리스트</S.KeywordList>
          <S.KeywordList>리스트</S.KeywordList>
          <S.KeywordList>리스트</S.KeywordList>
        </S.KeywordBox>
      )}
    </S.SearchBox>
  );
};

export default TemplateBodyTopSearch;

const S = {
  SearchBox: styled.div`
    display: flex;
    position: relative;
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
  KeywordBox: styled.ul`
    position: absolute;
    top: 50px;
    left: 0;
    width: 300px;
    background: #fff;
    border: 1.5px solid ${theme.mainColor};
  `,
  KeywordList: styled.li`
    padding: 10px 0 10px 40px;
    font-size: 20px;
    font-weight: 900;
    color: ${theme.mainColor};
    border-bottom: 1px solid ${theme.mainColor};
  `,
};
