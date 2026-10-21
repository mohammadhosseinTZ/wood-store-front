import CallUs from "./CallUs"
import Content from "./Content"
import styles from "./styles.module.css"

export default function SubHeader() {
    return <div className={styles.dropdownContainer}>
        <div className={styles.dropdown}>
            محصولات
            <span className="material-symbols-outlined">
                keyboard_arrow_down
            </span>
        </div>
        <div className={styles.dropdownResultWrapper}>
            <div className={styles.dropdownResult}>

                <Content />
                <CallUs />
            </div>
        </div>
    </div>
}