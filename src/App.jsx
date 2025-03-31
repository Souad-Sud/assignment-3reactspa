import './App.css'
import Header from './components/Header'
import Home from './pages/Home/index.jsx'
import DisplayCountries from './components/DisplayCountries/index.jsx'

function App() {


  // const pages = {
  //  home:  <Home />,
  // };


  /**New test  */
  return (
    <>
    <Header />
    <DisplayCountries />
    <Home/>

     {/* {pages[homePage]} */}
    </>
  );
}

export default App
