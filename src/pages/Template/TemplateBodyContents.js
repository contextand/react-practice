import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const TemplateBodyContents = () => {
  return (
    <S.ListBox>
      <S.ListItem>
        <S.Title>이렇게 감사인사</S.Title>
        <S.Text>
          감사인사를 이렇게 적으면 여기 이렇게 적힌다. 다른 것은 없다. 여러 줄을
          쓴다면 이렇게 적힌다. 아래에 이렇게 따라 온다. 계속 따라올 것이다.
        </S.Text>
        <S.Copy>카피 : 0</S.Copy>
      </S.ListItem>
      <S.ListItem>
        <S.Title>이렇게 감사인사</S.Title>
        <S.Text>
          감사인사를 이렇게 적으면 여기 이렇게 적힌다. 다른 것은 없다. 여러 줄을
          쓴다면 이렇게 적힌다. 아래에 이렇게 따라 온다. 계속 따라올 것이다.
        </S.Text>
        <S.Copy>카피 : 0</S.Copy>
      </S.ListItem>
      <S.ListItem>
        <S.Title>이렇게 감사인사</S.Title>
        <S.Text>
          감사인사를 이렇게 적으면 여기 이렇게 적힌다. 다른 것은 없다. 여러 줄을
          쓴다면 이렇게 적힌다. 아래에 이렇게 따라 온다. 계속 따라올 것이다.
        </S.Text>
        <S.Copy>카피 : 0</S.Copy>
      </S.ListItem>
    </S.ListBox>
  );
};

export default TemplateBodyContents;

const S = {
  ListBox: styled.ul`
    margin-top: 40px;
    background: yellow;
  `,
  ListItem: styled.li`
    width: 33.33333%;
    padding: 30px;
    border: 1.5px solid ${theme.mainColor};
  `,
  Title: styled.p`
    margin-bottom: 20px;
    color: ${theme.mainColor};
    font-size: 24px;
    font-weight: 900;
  `,
  Text: styled.p`
    margin-bottom: 20px;
    line-height: 1.4;
    font-size: 18px;
  `,
  Copy: styled.div`
    display: inline-block;
    padding: 10px 20px;
    font-weight: 900;
    background: ${theme.mainColor};
    cursor: pointer;
  `,
};
