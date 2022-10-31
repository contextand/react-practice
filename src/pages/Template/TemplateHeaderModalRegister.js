import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { db } from '../../config';

const TemplateHeaderModalRegister = ({ handleOpenModal }) => {
  const [keyword, setKeyword] = useState('');
  const [text, setText] = useState('');

  const handleData = e => {
    if (e.target.name === 'keyword') {
      setKeyword(e.target.value);
    } else if (e.target.name === 'text') {
      setText(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const templateRef = db.collection('Templates').doc();
    templateRef
      .set({
        id: templateRef.id, // doc, id 넣어주기
        keyword: keyword,
        text: text,
      })
      .then(docRef => {
        db.collection('Keyword').doc(keyword).set({ keyword: keyword });
        // 키워드 중복 문제
        // 도큐먼트 아이디를 키워드로, set을 사용
        // count 추가 filedValue.increasment
        handleOpenModal();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <S.FormWrap onSubmit={handleSubmit}>
      <S.Title>템플릿 등록하기</S.Title>
      <S.KeywordInput
        type="keyword"
        name="keyword"
        requried
        value={keyword}
        onChange={handleData}
      />
      <S.TextInput name="text" requried value={text} onChange={handleData} />
      <S.SubmitBtn>등록하기</S.SubmitBtn>
    </S.FormWrap>
  );
};

export default TemplateHeaderModalRegister;

const S = {
  FormWrap: styled.form`
    display: flex;
    flex-direction: column;
  `,
  Title: styled.h1`
    margin-bottom: 40px;
    color: ${theme.mainColor};
    font-size: 30px;
    font-weight: 900;
  `,
  KeywordInput: styled.input.attrs({
    placeholder: '키워드 입력',
    placeholderTextColor: `${theme.mainColor}`,
  })`
    padding: 10px 20px;
    margin-bottom: 20px;
    font-size: 16px;
    border: 2px solid ${theme.mainColor};
  `,
  TextInput: styled.textarea`
    height: 300px;
    padding: 20px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.6;
    border: 2px solid ${theme.mainColor};
  `,
  SubmitBtn: styled.button`
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    color: white;
    background: ${theme.mainColor};
    cursor: pointer;
  `,
};
