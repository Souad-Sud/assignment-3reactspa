import styles from "./navigation.module.css"
import { FrceF } from "../../data/data"

const Navigation = () => {
    return(
        <nav className={styles.navigation}>
        {FrceF.map((element, index) => 
            <ul key={index} className={styles.navigationContent}>
                <li>
                    <a href="#"> {element.city}</a>
                  
                </li>
            </ul>
             )}
        </nav>

    )
}
export default Navigation