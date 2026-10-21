import Link from "next/link";
import styles from "./styles.module.css"

export default function CallUs() {
    return <div className={styles.callUsWrapper} >
        <p>
            نیاز به مشاوره دارید؟ کارشناسان ما همیشه آماده پاسخگویی به سوالات شما هستند.
        </p>
        <Link href={"/"} className={styles.link}>
            مشاوره رایگان
            <span className="material-symbols-outlined">
                arrow_back_ios
            </span>
        </Link>
    </div>
}