import cx from 'classnames';
import React from "react";

import './Button.css';

export const THEME = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

/**
 * @param {string} name - 按鈕名稱
 * @param {number} width - 按鈕寬度
 * @param {number} height - 按鈕高度
 * @param {function} onClick - 按鈕點擊事件
 * @param {string} className - 按鈕樣式
 * @param {string} theme - 按鈕主題，'primary' | 'secondary'，預設為 primary
 * @param {boolean} disabled - 是否禁用按鈕，預設為 false
 * @returns {JSX.Element}
 */
function Button({ name, width, height, onClick, className, theme = THEME.PRIMARY, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx('button', className, theme, { disabled})}
      style={{
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
        padding: width && height && '0px',
      }}
      disabled={disabled}
    >
      {name}
    </button>
  );
}

export default Button;