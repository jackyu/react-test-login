import cx from 'classnames';
import { memo } from 'react';
import Button from '../atoms/Button';
import LogoIcon from '../../assets/images/logo.svg';
import Router from '../../constants/router';
import { useRouterContext } from '../../hooks/use-router-context';
import { useAuthContext } from '../../hooks/use-auth-context';

import './Sidebar.css';

function Sidebar() {
  const { router, setRouter } = useRouterContext();
  const { logined, setLogined } = useAuthContext();

  const onClickHandler = (page) => () => {
    if (page !== Router.LOGOUT) {
      setRouter(page);
    } else {
      if (window.confirm('確定要登出嗎？')) {
        setLogined(null);
        setRouter(Router.LOGIN);
      }
    }
  }

  return (
    <aside className="sidebar">
      <img src={LogoIcon} alt="logo" className="logo"/>
      <ul>
        <li>
          <Button
            key={`page_${Router.COMPANY}`}
            name="首頁"
            onClick={onClickHandler(Router.COMPANY)}
            className={cx({ 'active': router === Router.COMPANY })}
          />
        </li>
        <li>
          <Button
            key={`page_${Router.LOGIN}`}
            name="登入"
            onClick={onClickHandler(Router.LOGIN)}
            className={cx({ 'active': router === Router.LOGIN })}
          />
        </li>
        <li>
          <Button
            key={`page_${Router.LOGOUT}`}
            name="登出"
            onClick={onClickHandler(Router.LOGOUT)}
            disabled={!logined}
          />
        </li>
      </ul>
	  </aside>
  );
}

export default memo(Sidebar);
