import cx from 'classnames';
import React, { useState, forwardRef, useImperativeHandle } from 'react';

import './Modal.css';

const Modal = forwardRef(function Modal({ title = '標題', children, offsetY = 46 }, ref) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickCloseHandler = () => {
    setIsOpen(false);
  }

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  return isOpen && (
    <div
      className={cx('modal', { show: isOpen })}
      style={{ marginTop: `${offsetY}px` }}
    >
      <div className="modal-header">
        <h3>{title}</h3>
        <button
          type="button"
          className="modal-close-button"
          onClick={onClickCloseHandler}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="currentColor"
            style={{
              display: "inline-block",
              userSelect: "none",
              verticalAlign: "text-bottom",
              overflow: "visible"
            }}
          >
            <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
          </svg>
        </button>
      </div>
      <div className="modal-content">
        {children}
      </div>
    </div>
  )
});

export default Modal;