import React from 'react';
import Spinner from '../../components/Spinner';
import styles from './CityList.module.css';
import CityItem from '../city-item/city-item';
import Message from '../../components/Message';
import { useCities } from '../../context/cities-context';

export default function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  console.log(cities);
  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    );

  return (
    <ul className={styles.cityList}>
      {cities?.map((city, i) => (
        <CityItem city={city} key={i} />
      ))}
    </ul>
  );
}
