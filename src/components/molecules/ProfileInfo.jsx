import React from 'react';
import { useAuthContext } from '../../hooks/use-auth-context';
import WebConfig from '../../configs/web.json';
import CryptoJS from 'crypto-js';

import './ProfileInfo.css';

function ProfileInfo() {
  const { logined } = useAuthContext();

  let decryptedPassword = '';

  if (logined.password) {
    const bytes = CryptoJS.AES.decrypt(logined.password, WebConfig.SECRET_KEY);
    decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
  }

  return (
    <ul className="profile">
      <li>登入帳號: <strong>{logined.username}</strong></li>
      <li>登入密碼: <strong>{decryptedPassword}</strong></li>
    </ul>
  )
}

export default ProfileInfo;