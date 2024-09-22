import React from 'react';
import SideBar from '../../components/sidebar.jsx/sidebar';
import styles from './AppLayout.module.css';
import Map from '../../components/map.jsx/map';

export default function AppPage() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}
