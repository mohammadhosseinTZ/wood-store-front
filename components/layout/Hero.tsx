import ContainedLink from "../buttons/ContainedLink"
import styles from "./styles.module.css"


export default function HeroPage() {
    return <section className={styles.heroWrapper}>
        <div>
            <div className={styles.hero}>
                <h1>صنایع چوبی تشکر</h1>
                <h5>مرکز تخصصی فروش انواع ورق خام MDF و محصولات چوبی</h5>
                <p>تامین کننده برترین برندهای ورق MDF با کیفیت تضمینی، تنوع رنگ بی‌نظیر و قیمت رقابتی برای پروژه‌های صنعتی و دکوراسیون داخلی.</p>
            </div>
            <div className={styles.products}>
                <ContainedLink title="ارتباط با ما" href="call-us" icon={"call"} />
                <ContainedLink title="محصولات" href="products" className={styles.ContainedLinkCustom} icon={"shopping_bag"} themReverse={true} />
            </div>
        </div>
    </section>
}