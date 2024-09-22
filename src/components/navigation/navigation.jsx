import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';
import Logo from '../logo/logo';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink
            to={`pricing`}
            exact
            className={({ isActive }) => (isActive ? `${styles.active}` : '')}
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to={`product`}>Product</NavLink>
        </li>
        <li>
          <NavLink to={`login`} className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
