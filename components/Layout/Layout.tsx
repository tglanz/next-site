import React from 'react';
import Footer from '../Footer';
import SearchBox from '../SearchBox/SearchBox';

import style from './Layout.module.css';

export const Layout: React.FC<{}> = ({ children }) => (
  <div className={style.container}>
    <header>
      <div className="flex flex-row justify-end">
        <SearchBox />
      </div>
    </header>
    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
  </div>
);