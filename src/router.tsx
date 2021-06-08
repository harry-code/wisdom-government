import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import ErrorBoundary from '~/components/common/ErrorBoundary';

const Index = React.lazy(() => import('~/views/index/index'))
const Login = React.lazy(() => import('~/components/common/login'))
const Header = React.lazy(() => import('~/components/common/header'))

function PrimaryLayout() {
  return (
    <div className="main-wrapper">
      <Header />
      <div className="main-wrapper-content">
        <div id="module1"></div>
        <div id="module2"></div>
        <div id="module3"></div>
      </div>
    </div>
  )
}

export default () => (
  <div className="page-content">
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <ConfigProvider locale={zhCN}>
          <BrowserRouter>
            <Switch>
              <Route path="/login"><Login /></Route>
              <PrimaryLayout />
            </Switch>
          </BrowserRouter>
        </ConfigProvider>
      </Suspense>
    </ErrorBoundary>
  </div >
)