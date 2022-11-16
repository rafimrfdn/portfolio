import React from 'react';

import './style.scss';

const index = () => {
  return (
    <div className={''}>
      <div className={'ball'}></div>
      <div className={'ball'}></div>
      <div className={'ball'}></div>
      <div className={'ball'}></div>
      <div className={'ball'}></div>
      <div className={'ball'}></div>
      <div className={'ball'}></div>
    </div>
  );
};

export default React.memo(index);
