import styles from './countryDetail.module.css';
import { getImageUrl } from "../../utils/function.js";
import { ArrowFatLinesUp } from "@phosphor-icons/react";

const CountryDetail = ({ country, cities, onBack, onSelectCity }) => {
    return (
        <> 
            <div className={styles.goBackContainer}>
                <ArrowFatLinesUp size={40} onClick={onBack} className={styles.goBackbtn} />
            </div>
            <div className={styles.displayCountry}>
                <h2>{country}</h2>         
            </div>
            <div className={styles.displayCities}>
                {cities.map((city, index) => (
                    <div className={styles.detail} key={index}>   
                        <div className={styles.container}>
                            <div className={styles.imageContainer}>
                                <h2>{city.city}</h2>
                                <img src={getImageUrl(city.image)} alt={city.city} />
                            </div>
                            <div className={styles.blokDescription}>
                                <h3><span>Country</span> : {city.country}</h3>
                                <h3><span>City</span> : {city.city}</h3>
                                <p><span>Description</span>: {city.description}</p>
                                <h3>Year : {city.year}</h3>   
                                <button className={styles.displaybtn} 
                                    onClick={() => { 
                                    onSelectCity(city);
                                    }}>Find activities
                                    </button>     
                            </div>
                        </div>
                    </div>   
                ))}
            </div>                     
        </>
    );
};

export default CountryDetail;
