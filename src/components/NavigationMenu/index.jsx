import { AllCities, allCountries } from "../../data/data";
import CountryList from "../CountryList";
import CountryDetail from "../CountryDetail";
import {DotsThreeCircle  } from "@phosphor-icons/react";
import styles from "./navigationMenu.module.css"
import { useState } from "react";
import Logo from "../Logo"
import ActivityDetail from "../ActivityDetail";
import Main from "../Main";

const NavigationMenu = () => {
      
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [selectedCity, setSelectedCity] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const filterCities = selectedCountry 
    ? AllCities.filter((travel) => travel.country === selectedCountry):
      [];

      const handleSelectCountry = (country) => {
        setSelectedCountry(country);
        setSelectedCity(null); // Reset city selection when country is selected
      };

    
    return(
            <div className={styles.menuContainer}>
                <nav className={styles.navbarContainer}> 
                    <div className={styles.icon}>
                        <DotsThreeCircle size={40} 
                        className={styles.iconLogo} 
                        onClick={() =>setIsOpen(!isOpen)}/> 
                        <Logo />
                    </div>
                    <ul className={`${styles.menu} ${isOpen ? styles.open : ""} ${styles.displayCountries}`}>
                   
                    {allCountries.map((country, index) => (
                        <CountryList 
                            key={index} 
                            country={country} 
                            onClick={() => {
                                setSelectedCountry(country);
                                setSelectedCity(null); 
                                setIsOpen(false) 
                            }} 
                        />
                    ))}

                    </ul>
                </nav>
                <div className={styles.displayCities}>
                {selectedCity ? (
                    <ActivityDetail 
                        city={selectedCity}  
                        onBack={() => setSelectedCity(null)} 
                    />
                ) : selectedCountry ? (
                    <CountryDetail 
                        country={selectedCountry}
                        cities={filterCities} 
                        onBack={() => setSelectedCountry(null)}
                        onSelectCity={setSelectedCity} 
                    />
                ) : (
                    <Main                        
                        onSelectedCountry={handleSelectCountry}
                         countries={allCountries}
                    />
                )}
                </div>
        </div>

    )
}

export default NavigationMenu
