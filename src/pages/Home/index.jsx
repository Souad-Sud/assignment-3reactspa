import styles from './home.module.css'

const Home = ({onNavigation}) => {
    return(   
        <div className={styles.mainContent}>
            <div className={styles.content}>
                <h2>Start new adventure </h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque voluptatum nobis tempore quas adipisci ullam laudantium quam voluptas reprehenderit repellendus. Veniam voluptates laudantium exercitationem quam corporis ex doloremque quos facere.
                    Qui doloremque expedita atque animi   accusantium itaque optio? Magnam, laboriosam blanditiis quidem fuga voluptatem obcaecati? Quis, provident. Nemo eos illo quae molestiae aut! Minus hic totam, architecto voluptas ad vel.
                    Minus id quisquam facere, quis,  niet nesciunt, molestiae beatae adipisci perferendis architecto. Assumenda eius 
                    ex quisquam, in optio, debitis consequuntur perspiciatis quibusdam cum voluptatum, totam veritatis qui 
                    .Laudantium, consectetur?
                    </p>
                <button className={styles.btn} onClick={onNavigation}>Discover more</button> 
            </div>
        </div>
    )
}

export default Home