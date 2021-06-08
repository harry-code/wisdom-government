import React from 'react';
import HeadImg from '~/assets/header/head-bg.jpg';
import SystemLink from './systemLink/index';
import Top1 from '~/assets/header/tp01.png';
import Top2 from '~/assets/header/tp02.png';
import Top3 from '~/assets/header/tp03.png';
import Top4 from '~/assets/header/tp04.png';
import Top5 from '~/assets/header/tp05.png';
import Top6 from '~/assets/header/tp06.png';
import Top7 from '~/assets/header/tp07.png';
import Top8 from '~/assets/header/tp08.png';
import Top9 from '~/assets/header/tp09.png';
import Top10 from '~/assets/header/tp10.png';
import Top11 from '~/assets/header/tp11.png';
import './index.less'

function Header() {
  const systemArr = [
    {
      src: Top1,
      title: '系统首页'
    },
    {
      src: Top2,
      title: '模块1'
    },
    {
      src: Top3,
      title: '模块2'
    },
    {
      src: Top4,
      title: '模块3'
    },
    {
      src: Top5,
      title: '模块4'
    },
    {
      src: Top6,
      title: '模块5'
    },
    {
      src: Top7,
      title: '模块6'
    },
    {
      src: Top8,
      title: '模块7'
    },
    {
      src: Top9,
      title: '模块8'
    },
    {
      src: Top10,
      title: '模块9'
    },
    {
      src: Top11,
      title: '模块10'
    },
  ]
  return (
    <div className="header">
      <div>
        <img src={HeadImg} alt="" />
      </div>
      <ul>
        {
          systemArr.map((ite) => {
            return (
              <SystemLink src={ite.src} title={ite.title} key={ite.src} />
            )
          })
        }
      </ul>
    </div>
  )
}

export default Header