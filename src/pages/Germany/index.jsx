import styles from "./germany.module.css"
import img1 from "../../assets/neubrandenbourg.jpeg"
import img2 from "../../assets/munich.jpg"
import img3 from "../../assets/berlin.jpeg"
import img4 from "../../assets/waren.jpg"
const Germany = () => {
    return(
        <div className={styles.swedenContainer}>
                    <nav className={styles.navigation}>
                        <ul className={styles.navigationContent}>
                            <li>Göteborg</li>
                            <li>Kallhäal</li>
                            <li>Trängslet</li>
                            <li>Vadstena</li>
                        </ul>
                    </nav>
        
                    <div>
                        <div className={styles.mainContent}>
                            <h2>Germany</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis consequuntur aspernatur fugiat aliquid minima. Pariatur sapiente saepe exercitationem deleniti natus! Tempora ex sequi libero aliquam quibusdam doloremque facere quae!</p>
                        </div>
                     
                     <div className={styles.gallery}>
                        <div>
                            <img src={img1} alt="" height={300}  width={250}/>
                        </div>
                        <div>
                        <img src={img2} alt="" height={300}  width={250} />
                        </div>
                        <div>
                        <img src={img3} alt="" height={300}  width={250}/>
                        </div>
                        <div>
                        <img src={img4} alt="" height={300}  width={250}/>
                        </div>
        
                     </div>
                    </div>
        
                </div>
    )
}

export default Germany