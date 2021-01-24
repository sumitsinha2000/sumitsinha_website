import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Layout } from 'antd';
import 'font-awesome/less/font-awesome.less';
import style from './footer.module.less';
import '../../../styles/global.less';
import { useWindowSize } from '../../../utils/hooks';

export default () => {
  const [menu, setMenu] = useState(false);

  const [width] = useWindowSize();
  const toggleMenu = () => {
    if (width !== 0 && width <= 768) {
     
    }
  };
  return (
    <>
      <div className={style.footerBar}>
         <span>&copy; 2021 Sumit Sinha, All rights reserved</span>  
      </div>
    </>
  );
};
