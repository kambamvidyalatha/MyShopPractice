import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Productpage from './pages/Productpage';
import Addproduct from './pages/Addproduct';
import {BrowserRouter as Route, BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <div>
        <h1>MY SHOP PROJECT HERE</h1>
        <Header></Header>
        <Route path="./productspage">
          <Productpage></Productpage>
        </Route>
        <Route path="./AddProduct">
          <Addproduct></Addproduct>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
