import styles from './cityDetail.module.css'
import {getImageUrl} from "../../utils/function.js"
import { ArrowFatLinesUp } from "@phosphor-icons/react";

const CityDetail = ({city, onBack}) => {
    return(
        <>
            <div className={styles.detail}>
                <div className={styles.titleContainer}>
                  <ArrowFatLinesUp size={32} onClick={onBack} />
                  <h2>{city.city}</h2>

                </div>
      
                    <div className={styles.container}>
                        <div className={styles.containerImg}>
                            <img src={getImageUrl(city.image)} alt="" />
                        </div>
                        <div className={styles.blokDescription}>
                            <h3>Country :{city.country}</h3>
                            <h3>City :{city.city}:</h3>
                            <p><span>Description</span>  : {city.description}.</p>
                            <p><span>Activities </span> : {city.activities}.</p>
                            <h3>Year :{city.year}</h3>
                        </div>
                    </div>
            </div> 
        </>
    )
}

export default CityDetail