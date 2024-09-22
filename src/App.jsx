import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
  Home,
  Product,
  Pricing,
  NotFound,
  Login,
  AppPage,
} from './pages/index';
import CityList from './components/city-list/city-list';
import CountryList from './components/country-list/country-list';
import City from './components/city/city';
import Form from './components/form/Form';
import { CitiesProvider } from './context/cities-context';

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='app' element={<AppPage />}>
            <Route index element={<Navigate replace to='cities' />} />
            <Route path='cities' element={<CityList />} />
            <Route path='cities/:id' element={<City />} />
            <Route path='countries' element={<CountryList />} />
            <Route path='form' element={<Form />} />
          </Route>
          <Route path='/' element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='*' element={<NotFound />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
