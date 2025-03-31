import React, { useState } from "react"
import CityDetail from "../cityDetail"
import styles from './CountryDetail.module.css'
import { ArrowFatLinesUp, DotsThreeCircle  } from "@phosphor-icons/react";

const CountryDetail = ({country, cities, onBack}) => {
     const [selectedCity, setSelectedCity ] = useState(null);
     if(selectedCity) {
        return <CityDetail city={selectedCity} onBack={() => setSelectedCity(null)} />
     }
    return(
        <> 
            <ul className={styles.sousNav}>
            {/* <DotsThreeCircle size={32} /> */}
                {cities.map((city, index) => (
                    <li key={index}
                    onClick={() => setSelectedCity(city)}>                     
                        {city.city}        
                    </li>
                ))}
            </ul>         
            <ArrowFatLinesUp size={32} onClick={onBack} />
            
        </>

    )
}

export default CountryDetail