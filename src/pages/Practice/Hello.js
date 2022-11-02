import React from 'react';

const Hello = ({ color, name, isSpecial }) => {
  return (
    <div style={{ color }}>
      {isSpecial && <b>조건부</b>}
      안녕하세요 {name}
    </div>
  );
};

export default Hello;
