import cx from 'classnames';
import React from "react";

import './Button.css';

export const THEME = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

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