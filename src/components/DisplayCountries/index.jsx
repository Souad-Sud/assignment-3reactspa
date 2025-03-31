import { AllCities } from "../../data/data";
import CountryList from "../CountryList";
import CountryDetail from "../CountryDetail";
import {  DotsThreeCircle  } from "@phosphor-icons/react";
import styles from "./DisplayCountries.module.css"
import { useState } from "react";
import Logo from "../Logo"



const DisplayCountries = () => {
    const allCountries = [
        ...new Set(AllCities.map((travel) => travel.country)),
    ];
      
    const [selectedCountry, setSelectedCountry] = useState(null)
    const filterCities = selectedCountry ? AllCities.filter((travel) => travel.country === selectedCountry):
      [];

    //Responsive
    const [isOpen, setIsOpen] = useState(false)
    return(
            <div className={styles.menuContainer}>
                <nav className={styles.navbarContainer}> 
                    <div className={styles.icon}>
                        {/* Add onclick to show the menu */}
                        <DotsThreeCircle size={40} 
                        className={styles.iconLogo} 
                        onClick={() =>setIsOpen(!isOpen)}/> 
                        <Logo />
                    </div>
                    <ul className={`${styles.menu} ${isOpen ? styles.open : ""} ${styles.displayCountries}`}>
                    {allCountries.map((country, index) => (
                        <CountryList 
                        key= {index} 
                        country = {country} 
                        onClick={() => setSelectedCountry(country)} />
                        ))}
                    </ul>
                </nav>
                <div className={styles.displayCities}>
                    {selectedCountry && (
                    <CountryDetail 
                    country = {selectedCountry}
                    cities = {filterCities} 
                    onBack={() => setSelectedCountry(null)} />
                    )}
                </div>
        </div>


    )
}

export default DisplayCountries