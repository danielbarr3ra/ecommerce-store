import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, json } from 'react-router-dom';

import HomeDisplay from './components/HomeDisplay';
import ProductInventory from './components/ProductInventory';
import ShoppingCarts from './components/ShoppingCarts';

export default function App() {
  const [data, setData] = React.useState(null);

  const getItems = () => {
    fetch("/api/products").then((res) => res.json()).then((data) => setData(data))
  }

  React.useEffect(
    getItems, [])


  return (
    <>
      <h1>TEST</h1><Router>
        <h1>{JSON.stringify(data)}</h1>
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
            <Route path="/" element={<HomeDisplay />} />
            <Route path="/inventory" element={<ProductInventory />} />
            <Route path="/cart" element={<ShoppingCarts />} />
          </Routes>
        </div>
      </Router></>
  );
}