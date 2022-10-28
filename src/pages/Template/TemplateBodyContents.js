import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../../config';
import theme from '../../styles/theme';

const TemplateBodyContents = () => {
  const [templates, setTemplates] = useState([{}]);

  useEffect(() => {
    db.collection('Templates')
      .get()
      .then(docs => {
        docs.forEach(doc => {
          templates.push(doc.data());
        });
      });
  }, []);

  console.log(templates);
  // templates.shift();

  return (
    <S.ListBox>
      {templates.map(template => {
        return (
          <S.ListItem key={Math.random()}>
            <S.Item>
              <S.Title>{template.keyword}</S.Title>
              <S.Text>{template.text}</S.Text>
              <S.Copy>복사하기 : 0</S.Copy>
            </S.Item>
          </S.ListItem>
        );
      })}
    </S.ListBox>
  );
};

export default TemplateBodyContents;

const S = {
  ListBox: styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 40px -10px;
  `,
  ListItem: styled.li`
    width: 33.3333%;
    padding: 0 10px;
    margin-bottom: 20px;
  `,
  Item: styled.div`
    padding: 30px 20px;
    border: 1.5px solid ${theme.mainColor};
  `,
  Title: styled.p`
    margin-bottom: 20px;
    color: ${theme.mainColor};
    font-size: 24px;
    font-weight: 900;
  `,
  Text: styled.p`
    margin-bottom: 60px;
    line-height: 1.4;
    font-size: 18px;
  `,
  Copy: styled.div`
    display: inline-block;
    padding: 10px 20px;
    font-weight: 900;
    background: #ddd;
    cursor: pointer;
  `,
};
