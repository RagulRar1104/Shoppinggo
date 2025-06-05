import React, { Suspense, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Loader from './Components/Loader';
import { CartProvider } from './Components/Carts/CartContext';
import CartPage from './Components/Carts/CartPage';
import InvoicePage from './Components/Carts/InvoicePage';
import MainMenu from './Components/FrontPage/MainMenu';

const Register = React.lazy(() => import('./Components/MainIndex/Register'));
const Login = React.lazy(() => import('./Components/MainIndex/Login'));
const Electronics = React.lazy(() => import('./Components/Shoppingitems/Electronics'));
const Fashion = React.lazy(() => import('./Components/Shoppingitems/Fashion'));
const Grocery = React.lazy(() => import('./Components/Shoppingitems/Grocery'));
const HomeApp = React.lazy(() => import('./Components/Shoppingitems/HomeApp'));
const Mobiles = React.lazy(() => import('./Components/Shoppingitems/Mobiles'));
const Toys = React.lazy(() => import('./Components/Shoppingitems/Toys'));
const Frontfull = React.lazy(() => import('./Components/FrontPage/Frontfull'));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
      <Router>
        {loading ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Frontfull" element={<Frontfull />} />
              <Route path="/CartPage" element={<CartPage />} />
              <Route path="/MainMenu" element={<MainMenu />} />

              <Route path="/invoice" element={<InvoicePage />} />
              <Route path="/Fashion" element={<Fashion />} />
              <Route path="/Electronics" element={<Electronics />} />
              <Route path="/Grocery" element={<Grocery />} />
              <Route path="/HomeApp" element={<HomeApp />} />
              <Route path="/Mobiles" element={<Mobiles />} />
              <Route path="/Toys" element={<Toys />} />
            </Routes>
          </Suspense>
        )}
      </Router>
    </CartProvider>
  );
};

export default App;
