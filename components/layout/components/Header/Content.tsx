import Link from "next/link";
import Item from "./components/Item"
import styles from "./styles.module.css"

export default function Content() {

    const items = [
        {
            title: "ورق MDF",
            links: [
                { title: "MDF ایرانی", link: "/" },
                { title: "MDF خارجی", link: "/" },
                { title: "MDF هایگلاس", link: "/" },
                { title: "MDF ملامینه", link: "/" },
            ],
        },
        {
            title: "نئوپان",
            links: [
                { title: "نئوپان خام", link: "/" },
                { title: "نئوپان ملامینه", link: "/" },
                { title: "نئوپان روکش‌دار", link: "/" },
                { title: "نئوپان ضد رطوبت", link: "/" },
            ],
        },
        {
            title: "تخته چندلایی",
            links: [
                { title: "پلای‌وود ایرانی", link: "/" },
                { title: "پلای‌وود خارجی", link: "/" },
                { title: "تخته چندلایی ضد آب", link: "/" },
                { title: "تخته چندلایی روسی", link: "/" },
            ],
        },
        {
            title: "چوب طبیعی",
            links: [
                { title: "چوب روسی", link: "/" },
                { title: "چوب راش", link: "/" },
                { title: "چوب گردو", link: "/" },
                { title: "چوب بلوط", link: "/" },
            ],
        },
        {
            title: "صفحات کابینت",
            links: [
                { title: "صفحه کابینت MDF", link: "/" },
                { title: "صفحه کابینت HPL", link: "/" },
                { title: "صفحه کابینت ضد آب", link: "/" },
                { title: "صفحه کابینت طرح سنگ", link: "/" },
            ],
        },
        {
            title: "یراق‌آلات و اتصالات",
            links: [
                { title: "لولا کابینت", link: "/" },
                { title: "ریل کشو", link: "/" },
                { title: "دستگیره کابینت", link: "/" },
                { title: "پیچ و اتصالات چوب", link: "/" },
            ],
        },
    ];

    return <div className={styles.content}>
        <div>{items.map((el, i) => {

            return <Item key={i} item={el} />
        })}
            <div className={styles.seeMore}>
                <Link href={"/"}>مشاهده بیشتر</Link>
            </div>
        </div>
        <div className={styles.banner}>
            content
        </div>
    </div>
}