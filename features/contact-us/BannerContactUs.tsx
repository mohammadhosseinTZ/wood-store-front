import ContainedLink from "@/components/buttons/ContainedLink"
import styles from "./styles.module.css"

export default function BannerContactUs() {
    return <div className={`tagsContainer ${styles.bannerContactUsWrapper}`}>
        <div className={styles.content}>
            <h1>
                تماس با ما
            </h1>
            <p>
                نواتل با استفاده از تجربه‌ی ۲۰ ساله شرکت آریا سامانه در امر مشتری‌مداری، وظیفه خود می‌داند تا با پشتیبانی ۲۴ ساعته به نیازها و نگرانی‌های مشترکین در سریع‌ترین زمان پاسخ دهد. برای تماس با نواتل می‌توانید از روش‌هایی که در ادامه برای شما ذکر شده، استفاده کنید. ما در هر لحظه و در هر مکانی آماده دریافت پیغام شما هستیم.
            </p>
            <ContainedLink href="/" title="تماس با ما" icon={"call"} className={styles.call} />
        </div>
        <div className={styles.shadow}></div>
    </div>
}