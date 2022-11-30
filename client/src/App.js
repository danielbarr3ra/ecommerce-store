/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Inventory from './components/Inventory';
import Product from './components/Product';

export default function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/inventory">Inventory</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>


          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </div>
      </Router></>
  );
}