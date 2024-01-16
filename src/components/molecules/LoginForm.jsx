import React, { useRef, useState, useEffect } from "react";
import { validateLoginData } from "../../utils/validate";
import Button, { THEME } from "../atoms/Button";
import WebConfig from '../../configs/web.json';
import CryptoJS from 'crypto-js';
import { useAuthContext } from '../../hooks/use-auth-context';

import './LoginForm.css';

const defaultMessage = {
  username: '',
  password: '',
};

const LOGIN_BUTTON = {
  WIDTH: 120,
  HEIGHT: 40,
};

/**
 * 登入表單
 */
function LoginForm() {
  const { setLogined } = useAuthContext();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [message, setMessage] = useState(defaultMessage);

  const login = (username, password) => {
    if (username === '' || password === '') return;

    // 將密碼加密後儲存
    const loginData = {
      username,
      password: CryptoJS.AES.encrypt(password, WebConfig.SECRET_KEY).toString(),
    };

    setLogined(loginData);
  }

  const onClickLoginHandler = (event) => {
    event.preventDefault();

    const username = usernameRef?.current?.value || '';
    const password = passwordRef?.current?.value || '';

    // 驗證帳號密碼是否符合格式
    const { result, validateMessage } = validateLoginData(username, password);

    if (result) {
      login(username, password);
      setMessage(defaultMessage)
    } else {
      if (validateMessage.username !== '' || validateMessage.password !== '') {
        setMessage(prevMessage => ({ ...prevMessage, ...validateMessage}));
      }
    }
  };

  useEffect(() => {
    usernameRef?.current.focus();
  }, [usernameRef]);

  return (
    <div className="login">
      <div className="login-box">
        <h2>會員登入</h2>
        <form>
          <input ref={usernameRef} type="text" placeholder="請輸入帳號" />
          {message.username && (<div className="error-message">{message.username}</div>)}
          <input ref={passwordRef} type="password" placeholder="請輸入密碼" />
          {message.password && (<div className="error-message">{message.password}</div>)}
          <div className="login-footer">
            <Button
              name="登入"
              width={LOGIN_BUTTON.WIDTH}
              height={LOGIN_BUTTON.HEIGHT}
              theme={THEME.SECONDARY}
              onClick={onClickLoginHandler}
              className="login-button"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;