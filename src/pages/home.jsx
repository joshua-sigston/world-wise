import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/navigation/navigation';

export default function Home() {
  return (
    <div className=''>
      <Navigation />
      <h1>
        <Link to={`/`}>World Wise</Link>
      </h1>
    </div>
  );
}
