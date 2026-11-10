import Link from "next/link"
import styles from "./styles.module.css"
import SubHeader from "./SubHeader"
import SubHeaderMobile from "./SubHeaderMobile"

export default function MenuItems({ mobile }: { mobile?: boolean }) {
    return <ul className={styles.items}>
        <li><Link href="/">صفحه اصلی</Link></li>
        <li>

            {mobile ? <SubHeaderMobile /> : <SubHeader />}
        </li>
        <li><Link href="/">درباره ما</Link></li>
        <li><Link href="/contact-us">تماس با ما</Link></li>
    </ul>
}