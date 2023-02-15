import React from 'react';
import Footer from '../Footer';

import style from './Layout.module.css';

export interface ParentProps {
  children?: React.ReactNode
}

export interface LayoutProps extends ParentProps {}

const Layout = ({ children }: LayoutProps) => (
  <div className={style.container}>
    {children}
    <footer>
      <Footer />
    </footer>
  </div>
);

export interface MainProps extends ParentProps {}
Layout.Main = ({ children }: MainProps) => <main>{children}</main>;

export interface HeaderProps extends ParentProps {}
Layout.Header = ({ children }: HeaderProps) => <header>
  {children}
</header>;

export default Layout;