import React from 'react';
import styled from 'styled-components';
import TemplateBodyTopFilter from './TemplateBodyTopFilter';
import TemplateBodyTopSearch from './TemplateBodyTopSearch';

const TemplateBodyTop = () => {
  return (
    <S.Wrap>
      <TemplateBodyTopSearch />
      <TemplateBodyTopFilter />
    </S.Wrap>
  );
};

export default TemplateBodyTop;

const S = {
  Wrap: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  `,
};
