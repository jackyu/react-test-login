import { memo } from 'react';
import { useAuthContext } from '../../hooks/use-auth-context';
import WebConfig from '../../configs/web.json';
import CryptoJS from 'crypto-js';

import './ProfileInfo.css';

/**
 * 登入資訊
 */
function ProfileInfo() {
  const { logined } = useAuthContext();

  let decryptedPassword = '';

  // 解密密碼
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

export default memo(ProfileInfo);