import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { db } from '../../config';
import styled from 'styled-components';
import theme from '../../styles/theme';

const TemplateBodyTopSearch = () => {
  const [isKeyword, setIsKeyword] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState('템플릿 선택');

  const handleKeyword = e => {
    setIsKeyword(cur => !cur);
  };

  const selectKeyword = e => {
    setSelectedKeyword(e.target.innerText);
  };

  useEffect(() => {
    db.collection('Keyword')
      .get()
      .then(docs => {
        docs.forEach(doc => {
          setKeywords(cur => [...cur, doc.data()]);
        });
      });
  }, []);

  return (
    <S.SearchBox onClick={handleKeyword}>
      <FaSearch className="icon" />
      <S.Text>{selectedKeyword}</S.Text>
      {isKeyword && (
        <S.KeywordBox>
          {keywords.map(word => {
            return (
              <S.KeywordList onClick={selectKeyword} key={word.id}>
                {word.keyword}
              </S.KeywordList>
            );
          })}
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
