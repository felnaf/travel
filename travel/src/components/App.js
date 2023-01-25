import React from 'react';

// importing Routes, Route for routing
import { Routes, Route } from 'react-router-dom';

// importing PrivateRoute
import { PrivateRoute } from './PrivateRoute';

// importing components
import Header from './Header';
import Home from './Home';
import Packages from './Packages';
import ViewPackage from './ViewPackage';
import Checkout from './Checkout';
import Offers from './Offers';
import Thankyou from './Thankyou';
import Signup from './Signup';
import Login from './Login';
import ViewOffer from './ViewOffer';

import '../assets/index.css';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="/offers" element={<Offers />} />
        <Route path="/view-offer/:id" element={<ViewOffer />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view-package/:id" element={<ViewPackage />} />
      </Routes>
    </div>
  );
};

export default App;

