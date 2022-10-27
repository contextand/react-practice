import React from 'react';
import styled from 'styled-components';
import TemplateBodyContents from './TemplateBodyContents';
import TemplateBodyTop from './TemplateBodyTop';

const TemplateBody = () => {
  return (
    <S.Wrap>
      <TemplateBodyTop />
      <TemplateBodyContents />
    </S.Wrap>
  );
};

export default TemplateBody;

const S = {
  Wrap: styled.div`
    max-width: 1200px;
    padding: 0 30px;
    margin: 40px auto;
  `,
};
