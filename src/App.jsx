import './App.css'
import Header from './components/Header'
import { useState } from 'react'
import Home from './pages/Home/index.jsx'
import DisplayCountries from './components/DisplayCountries/index.jsx'

function App() {
const [homePage, setHomePage] = useState("home")

  const pages = {
   home:  <Home />,
  };


  /**New test  */
  return (
    <>
    <Header />
    <DisplayCountries/>
    {pages[homePage]}
    </>
  )
}

export default App
