import React, { useState } from "react"
import styles from './CountryDetail.module.css'
import {getImageUrl} from "../../utils/function.js"
import { ArrowFatLinesUp} from "@phosphor-icons/react";

const CountryDetail = ({country, cities, onBack, onClick}) => {
     const [selectedCity, setSelectedCity ] = useState(null);
     if(selectedCity) {
        return <CityDetail city={selectedCity} onBack={() => setSelectedCity(null)} />
     }
    return(
        <> 
        <div className={styles.goBackContainer}>
            <ArrowFatLinesUp size={40} onClick={onBack} className={styles.goBackbtn} />
        </div>
        <div className={styles.displayCountry }>
            <h2>{country}</h2>         
        </div>
            <div className={styles.displayCities}>
            {/* <DotsThreeCircle size={32} /> */}
                {cities.map((city, index) => (
                    <div className={styles.detail} key={index}>   
                        <div className={styles.container}>
                            <div className={styles.imageContainer}>
                                <h2>{city.city}</h2>
                                    <img src={getImageUrl(city.image)} alt={getImageUrl(city.image)} />
                                </div>
                            <div className={styles.blokDescription}>
                                    <h3><span>Country</span> :{city.country}</h3>
                                    <h3><span>City</span> :{city.city}:</h3>
                                    <p><span>Description</span>  : {city.description}.</p>
                                    <p><span>Activities </span> : {city.activities}.</p>
                                    <h3>Year :{city.year}</h3>
                            <button className={styles.displaybtn} >More activities</button>              
                            </div>
                        </div>
                    </div>   
                ))}
            </div>                     
        </>

    )
}

export default CountryDetail