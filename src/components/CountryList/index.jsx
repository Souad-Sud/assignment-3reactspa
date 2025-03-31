import React, { useState } from "react"
import styles from "./countryList.module.css"

const CountryList = ({country, onClick}) => {

    return(    
        <>
            <li className={styles.navItemsContainer}
            onClick={() => onClick(country)}>
            {country}                                       
            </li>               
        </>
            
    )
    
}

export default CountryList