import styles from "./sweden.module.css"
import img1 from "../../assets/Göteborg.jpg"
import img2 from "../../assets/kalhall.jpg"
import img3 from "../../assets/Vadstena.jpg"
import img4 from "../../assets/Trangslet.jpg"

const Sweden = () => {
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
                    <h2>  Sweden</h2>
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

export default Sweden