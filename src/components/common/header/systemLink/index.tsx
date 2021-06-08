import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.less'

interface pageProps {
  src: string;
  title: string;
}

function SystemLink({ src, title }: pageProps) {
  const Location = useHistory();
  const handlePath = () => {
    Location.push('/module1')
  }
  return (
    <>
      <li onClick={handlePath}>
        <img src={src} alt="占位" />
        <span>{title}</span>
      </li>
    </>
  )
}

export default SystemLink