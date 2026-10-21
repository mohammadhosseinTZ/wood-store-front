import Link from "next/link"
import styles from "./styles.module.css"
import Image from "next/image"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={`${styles.body} container`}>
                <div className={styles.menuItems}>
                    <ul>
                        <li>منو</li>
                        <li><Link href={"/"}>خانه</Link></li>
                        <li><Link href={"/"}>محصولات</Link></li>
                        <li><Link href={"/"}>مقالات</Link></li>
                        <li><Link href={"/"}>درباره ما</Link></li>
                        <li><Link href={"/"}>تماس با ما</Link></li>
                    </ul>
                    <ul>
                        <li>دسته بندی</li>
                        <li><Link href={"/"}>MDF خام</Link></li>
                    </ul>
                </div>
                <div className={styles.address}>
                    <div>
                        <span className="material-symbols-outlined">
                            person_pin_circle
                        </span>
                        <address>
                            استان فارس، آباده میدان امام علی کوچه حاج مهدی رسولی پلاک124
                        </address>
                    </div>
                    <div className={styles.phone}>
                        <span className="material-symbols-outlined">
                            call
                        </span>
                        <div>
                            <Link href={"/"} >
                                ۰۹۱۲۹۳۶۶۲۹۳
                            </Link>
                            <Link href={"/"} >
                                ۰۹۱۲۹۳۶۶۲۹۷
                            </Link>
                            <Link href={"/"} >
                                ۰۹۱۲۹۳۶۶۲۹۱
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.separator} container`}></div>
            <div className={styles.socials}>
                <Link href={"/"}><div><img src={"/icons/whatsapp.png"} alt="whatsapp" /></div></Link>
                <Link href={"/"}><div><img src={"/icons/telegram.png"} alt="telegram" /></div></Link>
                <Link href={"/"}><div><img src={"/icons/instagram.png"} alt="instagram" /></div></Link>
            </div>
        </div>
    )
}
