import { AllCities } from "../../data/data"
import styles from "./travelDetail.module.css"
import img1 from "../../assets/munich.jpg"

const TravelDetails = () => {
    return(
        <div className={styles.detail}>
            <div className={styles.container}>
                <div className={styles.containerImg}>
                    <img src={img1} alt="" />
                </div>
            <div className={styles.blokDescription}>

            <h3>Country: Norway</h3>
            <h3>City: Odda</h3>
            <p><span>description</span>  : Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ad eius incidunt numquam omnis vero provident sequi itaque eum voluptas maiores blanditiis autem error beatae porro quam est animi sed! </p>
            <p><span>Activities </span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eligendi amet quae perspiciatis, doloremque consequuntur molestiae explicabo delectus est obcaecati perferendis dolore, saepe exercitationem sint neque praesentium quaerat iusto pariatur.</p>
           
            <h3>Year: 2023 </h3>
        </div>
        </div>
        </div>  
    )
}

export default TravelDetails