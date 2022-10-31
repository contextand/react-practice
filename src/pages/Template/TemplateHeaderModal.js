import React from 'react';
import styled from 'styled-components';
import TemplateHeaderModalRegister from './TemplateHeaderModalRegister';

const TemplateHeaderModal = ({ handleOpenModal }) => {
  return (
    <>
      <S.ModalBack onClick={handleOpenModal} />
      <S.ModalBox>
        <TemplateHeaderModalRegister handleOpenModal={handleOpenModal} />
      </S.ModalBox>
    </>
  );
};

export default TemplateHeaderModal;

const S = {
  ModalBack: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.5;
    z-index: 2;
  `,
  ModalBox: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 700px;
    padding: 60px;
    background: white;
    z-index: 3;
  `,
};
