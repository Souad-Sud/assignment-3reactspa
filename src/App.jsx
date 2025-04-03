import './App.css'
import Header from './components/Header'
import Home from './pages/Home/index.jsx'
import NavigationMenu from './components/NavigationMenu/index.jsx'
import { useState } from 'react';

function App() {
  return (
    <>
      <Header />
      <NavigationMenu />
      <Home />
    </>
  );
}

export default App
