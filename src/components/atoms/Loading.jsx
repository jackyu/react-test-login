import React, { memo } from 'react';

import './Loading.css';

/**
 * 讀取中動畫元件
 * @returns {JSX.Element}
 */
function Loading() {
  return (<div className="loading"></div>);
}

export default memo(Loading);