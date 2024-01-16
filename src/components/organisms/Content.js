import { Suspense, lazy } from 'react';
import { useRouterContext } from '../../hooks/use-router-context';
import Company from '../molecules/CompanyInfo';
import Router from '../../constants/router';
import { useAuthContext } from '../../hooks/use-auth-context';
import Loading from '../atoms/Loading';

import './Content.css';

const LoginForm = lazy(() => import('../molecules/LoginForm'));
const TabPanel = lazy(() => import('../molecules/TabPanel'));

const LoadingMessage = () => {
  return (
    <div class="loading-page">
      <Loading />
      <p className="message">頁面載入中...</p>
    </div>
  );
}

/**
 * 右邊區塊
 * 主要顯示公司資訊、登入表單、登入後的下拉選單
 */
function Content() {
  const { logined } = useAuthContext();
  const { router } = useRouterContext();

  const Content = () => {
    switch (router) {
      case Router.COMPANY:
        return <Company />;
      case Router.LOGIN:
        return (
          <Suspense fallback={<LoadingMessage />}>
            {!logined ? <LoginForm /> : <TabPanel />}
          </Suspense>
        );
      default:
        return null;
    }
  }

  return (
    <main className="content">
      <Content />
	  </main>
  );
}

export default Content;
