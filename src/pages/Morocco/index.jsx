import styles from "./morocco.module.css"


const Morocco = () => {
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
                            <h2>Morocco</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis consequuntur aspernatur fugiat aliquid minima. Pariatur sapiente saepe exercitationem deleniti natus! Tempora ex sequi libero aliquam quibusdam doloremque facere quae!</p>
                        </div>
                    
                    </div>
        
                </div>
    )
}

export default Morocco