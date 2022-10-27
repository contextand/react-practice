import React from 'react';
import styled from 'styled-components';
import TemplateBodyTop from './TemplateBodyTop';

const TemplateBody = () => {
  return (
    <S.Wrap>
      <TemplateBodyTop />
    </S.Wrap>
  );
};

export default TemplateBody;

const S = {
  Wrap: styled.div`
    width: 1200px;
    margin: 40px auto;
    background: #efefef;
  `,
};
