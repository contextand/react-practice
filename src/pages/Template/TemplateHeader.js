import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import TemplateHeaderModal from './TemplateHeaderModal';

const TemplateHeader = () => {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };
  // 모달, handleModal 의미 모호, 핸들링. 모달을 무엇을 핸들하나..
  // 토글 모달. 껏다 켰다. 명시적 단어
  // 중의적 의미. handle 인데 핸들할 수 없음. 외부에서 값을 입력하지 않는 것, 핸들이 아닌. 더 명시적으로 쓰면 좋겠다. hanleOpenModal, Close.. ToggleModal.. isShown..
  // setIsModal 이것이 모달이냐. isShowModal.. 명시적 네이밍 필요

  return (
    <S.Wrap>
      <S.Title>뭐라고 쓸지 고민될 때</S.Title>
      <S.RegisterBtn onClick={handleModal}>나도 템플릿 등록하기</S.RegisterBtn>
      {isModal && <TemplateHeaderModal handleModal={handleModal} />}
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
