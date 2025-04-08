import styles from "./main.module.css"

const Main = ({onSelectedCountry, countries}) => {
    return(
        <main>

<div className={styles.container}>
        <div className={styles.gridItem1}><button onClick={() => onSelectedCountry(countries[2])}>Montpellier France</button></div>
        <div className={styles.gridItem2}><button onClick={() => onSelectedCountry(countries[1])}>Norway</button></div>
        <div className={styles.gridItem3}><button onClick={() => onSelectedCountry(countries[4])}>Berlin Germany</button></div>
        <div className={styles.gridItem4}><button onClick={() => onSelectedCountry(countries[2])}>Paris France</button></div>
        <div className={styles.gridItem5}><button onClick={() => onSelectedCountry(countries[1])}>Trollstigen Norway</button></div>
    </div>
        </main>
    )
}
export default Main