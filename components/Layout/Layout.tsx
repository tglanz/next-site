import React from 'react';
import Footer from '../Footer';

import style from './Layout.module.css';

export const Layout: React.FC<{}> = ({ children }) => (
  <div className={style.container}>
    <header>
    </header>
    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
  </div>
);