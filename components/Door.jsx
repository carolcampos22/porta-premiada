import styles from "../styles/Door.module.css"

export const Door = (props) => {
    const selected = props.selected ? styles.selected : ''
    return (
        <div className={styles.area}>
            <div className={`${styles.structure} ${selected}`}>
                <div className={styles.door}>
                    <div className={styles.number}>1</div>
                    <div className={styles.doorknob}></div>
                </div>
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}