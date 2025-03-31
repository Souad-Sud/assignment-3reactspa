import styles from "./france.module.css"
import { FrceF } from "../../data/data.js"
import {getImageUrl} from "../../utils/function.js"
import Navigation from "../../components/Navigation/index.jsx"
import TravelDetails from "../../components/TravelDetails/index.jsx"

const France = () => {
    return(
       <div className={styles.swedenContainer}>
            <Navigation />                           
                    <div className={styles.mainContent}>
                        <h2>France</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis consequuntur aspernatur fugiat aliquid minima. Pariatur sapiente saepe exercitationem deleniti natus! Tempora ex sequi libero aliquam quibusdam doloremque facere quae!</p>
                    </div>
          
                 

                <TravelDetails />
               
        </div>
    )
}

export default France