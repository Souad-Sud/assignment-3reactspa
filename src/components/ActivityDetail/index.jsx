import React from "react";
import styles from "./activityDetail.module.css";
import { ArrowFatLinesUp, Star } from "@phosphor-icons/react";
import { getImageUrl } from "../../utils/function.js";

const ActivityDetail = ({city, onBack}) => {
    return (
        <div className={styles.activityDetailContainer}>
            <ArrowFatLinesUp size={40} onClick={onBack} className={styles.goBackbtn} />
            <div className={styles.activityContainer}>
                <div className={styles.activityImg}>
                    <img src={getImageUrl(city.image)} alt={city.city} />
                </div>
                <div className={styles.flexColumn}>
                <div className={styles.activityDetail}>
                <h3><span>Country:</span> {city.country}</h3>
                <h3><span>City:</span> {city.city}</h3>
                <h3><span> Visited:</span>{city.year}</h3>   
                </div>
                <div className={styles.activityDescroption}>
                <p><span>Description</span>: {city.description}</p>
                <p><span>Activities:</span>{city.activities}</p>
                </div>
                </div>
                <div className={styles.stars}>
                <Star size={32} className={styles.star} />
                <Star size={32} className={styles.star}/>
                <Star size={32} className={styles.star} />
                <Star size={32} className={styles.star}/>
                </div>

            </div>
        </div>
    ); 
};

export default ActivityDetail;