import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to={`home`}>Home</NavLink>
        </li>
        <li>
          <NavLink to={`pricing`}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={`product`}>Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}
