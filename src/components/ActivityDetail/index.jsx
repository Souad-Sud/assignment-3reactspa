import React from "react";
import styles from "./activityDetail.module.css";
import { ArrowFatLinesUp } from "@phosphor-icons/react";
import { getImageUrl } from "../../utils/function.js";

const ActivityDetail = ({city, onBack}) => {
    return (
        <div className={styles.activityContainer}>
        <ArrowFatLinesUp size={40} onClick={onBack} className={styles.goBackbtn} />
        <div className={styles.activityContent}>
            <div className={styles.activityImg}>
            <h2>{city.city}</h2>
            <div className={styles.imgStyling}>

            <img src={getImageUrl(city.image)} alt={city.city} />
            </div>
            </div>
            <div className={styles.activityDescription}>
            <h3><span>Country:</span> {city.country}</h3>
            <h3><span> Visited:</span>{city.year}</h3>   
            <p><span>Activities:</span>{city.activities}</p>          
            </div>
        </div>
       </div>
    ); 
};

export default ActivityDetail;