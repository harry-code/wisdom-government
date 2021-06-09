import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { registerMicroApps, start } from 'qiankun';
import 'antd/dist/antd.less';
import '~/assets/common.less';

const apps = [
  {
    name: 'module1',
    entry: '//localhost:3001',
    container: '#module1',// 容器名
    activeRule: '/module1', // 激活的路径
    props: {
      a: 1
    }
  },
  {
    name: 'module2',
    entry: '//localhost:20000',
    container: '#module2',// 容器名
    activeRule: '/module2' // 激活的路径
  }
]

// 注册应用
registerMicroApps(apps);

start({
  prefetch: false // 关闭预加载
}) // 开启qiankun


ReactDOM.render(
  <Router />,
  document.getElementById('root')
)
