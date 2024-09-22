import React from 'react';
import styles from './Sidebar.module.css';
import Logo from '../logo/logo';
import AppNav from '../app-navigation/AppNav';
import { Outlet } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}></p>
      </footer>
    </div>
  );
}
