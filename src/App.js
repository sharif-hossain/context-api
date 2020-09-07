import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import { createContext } from 'react';

export const context = createContext();

function App() {
  const[count,setCount] = useState('laptop');
 
  return (
  <context.Provider value={[count,setCount] }>
      <h4>Count from App : {count}</h4>
      <Header count={count} setCount={setCount}></Header>
      <Home ></Home>
      <Shipment></Shipment>
    </context.Provider>
  );
}

export default App;
