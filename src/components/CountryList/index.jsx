import styles from "./countryList.module.css"

const CountryList = ({country, onClick}) => {

    return(    
        <>
            <li className={styles.navItemsContainer}
            onClick={() => onClick()}>
            {country}                                       
            </li>               
        </>
            
    )
    
}

export default CountryList