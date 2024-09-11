import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/product';
import Pricing from './pages/pricing';
import Home from './pages/home';
import NotFound from './pages/not-fonud';
import Layout from './layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='app' element={<Layout />} />
        <Route path='/' element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
