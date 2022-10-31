import React, { useEffect, useState } from 'react';
import { db } from '../../config';
import styled from 'styled-components';
import theme from '../../styles/theme';

const TemplateBodyContents = () => {
  const [templates, setTemplates] = useState([{}]);

  // useEffect(() => {
  //   // 첫번째 파라미터, 익명 펑션의 의미는?
  //   // useEffect.. 안의 이 함수는 누가 실행시켜주나
  //   // 함수를 누군가 호출해주어야 함 funcA, funcB 있을 때
  //   // 매개변수로 함수를 넣어서, 계속 타고들어가서 실행. useEffect 실행은 리액트가 하는 것
  //   // 어떤 컴포넌트에서 뭔가를 받는데, 컴포넌트도 결국 함수
  //   // 컴포넌트안에서 뭔가 실행하고 then 할때 동작하는 것이 콜백으로 계속 올라타게 될것
  //   // 다시 올라가서 리렌더, 스테이트 변경해주면 됨
  //   db.collection('Templates')
  //     .get()
  //     .then(docs => {
  //       // docs 가 규칙. 가져오고 나서 그 결과를 docs 으로 달라
  //       docs.forEach(doc => {
  //         setTemplates(cur => [...cur, { ...doc.data() }]); // 아이디를 불러올 때 넣어주는 방법. add로 데이터를 넣었다면 이렇게
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error); // 약속 못 지킨 것은 여기로 떨어지는.
  //       // 안된다고 했을 때 예외처리를 한다면 여기서
  //     });
  // }, []);

  useEffect(() => {
    const getTemplates = async () => {
      const templateRef = db.collection('Templates');
      console.log('templateRef : ', templateRef);
      const templateSnap = await templateRef.get();
      console.log('templateSnap : ', templateSnap);
      const newTemplate = templateSnap.docs.map(doc => {
        console.log(doc);
      });
    };
    getTemplates();
  }, []);

  // console.log(templates);
  templates.shift();

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
