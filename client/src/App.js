import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import HomeDisplay from './components/HomeDisplay';
import ProductInventory from './components/ProductInventory';
import ShoppingCarts from './components/ShoppingCarts';

export default function App() {
  return (
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

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/" element={<HomeDisplay />} />
          <Route path="/inventory" element={<ProductInventory />} />
          <Route path="/cart" element={<ShoppingCarts />} />
        </Routes>
      </div>
    </Router>
  );
}