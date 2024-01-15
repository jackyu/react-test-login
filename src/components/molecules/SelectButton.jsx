import React, { useRef } from "react";
import Modal from '../atoms/Modal';
import useClickOutside from "../../hooks/use-click-outside";

import './SelectButton.css';

function SelectButton({ name, width = 440, height = 44, onClick, children }) {
  const selectRef = useRef(null);
  const modalRef = useRef(null);

  const handleClickOutside = () => {
    modalRef?.current?.close();
  }

  const onClickHandler = () => {
    modalRef?.current?.open();
    onClick && onClick();
  }

  useClickOutside(selectRef, handleClickOutside);

  return (
    <div className="select" ref={selectRef}>
      <button
        type="button"
        onClick={onClickHandler}
        className="select-button"
        style={{
          width: width ? `${width}px` : undefined,
          height: height ? `${height}px` : undefined,
          padding: width && height && '0px',
        }}
      >
        <div>
          <span>{name}</span>
          <span className="arrow">
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
              <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
            </svg>
          </span>
        </div>
      </button>

      <Modal
        ref={modalRef}
        title = '選擇版本/登入資訊'
      >
        {children}
      </Modal>
    </div>
  );
}

export default SelectButton;