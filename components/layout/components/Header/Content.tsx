import Link from "next/link";
import Item from "./components/Item"
import styles from "./styles.module.css"
import Image from "next/image";

export default function Content() {

    const items = [
        {
            title: "ورق MDF",
            linkCategory:"/product-category/22" ,
            links: [
                { title: "MDF ایرانی", link: "/product-category/22/11" },
                { title: "MDF خارجی", link: "/product-category/22/11" },
                { title: "MDF هایگلاس", link: "/product-category/22/11" },
                { title: "MDF ملامینه", link: "/product-category/22/11" },
            ],
        },
        {
            title: "نئوپان",
            linkCategory:"/product-category/22" ,
            links: [
                { title: "نئوپان خام", link: "/product-category/22/11" },
                { title: "نئوپان ملامینه", link: "/product-category/22/11" },
                { title: "نئوپان روکش‌دار", link: "/product-category/22/11" },
                { title: "نئوپان ضد رطوبت", link: "/product-category/22/11" },
            ],
        },
        {
            title: "تخته چندلایی",
            linkCategory:"/product-category/22" ,
            links: [
                { title: "پلای‌وود ایرانی", link: "/product-category/22/11" },
                { title: "پلای‌وود خارجی", link: "/product-category/22/11" },
                { title: "تخته چندلایی ضد آب", link: "/product-category/22/11" },
                { title: "تخته چندلایی روسی", link: "/product-category/22/11" },
            ],
        },
        {
            title: "چوب طبیعی",
            linkCategory:"/product-category/22" ,
            links: [
                { title: "چوب روسی", link: "/product-category/22/11" },
                { title: "چوب راش", link: "/product-category/22/11" },
                { title: "چوب گردو", link: "/product-category/22/11" },
                { title: "چوب بلوط", link: "/product-category/22/11" },
            ],
        },
        {
            title: "صفحات کابینت",
            linkCategory:"/product-category/22" ,
            links: [
                { title: "صفحه کابینت MDF", link: "/product-category/22/11" },
                { title: "صفحه کابینت HPL", link: "/product-category/22/11" },
                { title: "صفحه کابینت ضد آب", link: "/product-category/22/11" },
                { title: "صفحه کابینت طرح سنگ", link: "/product-category/22/11" },
            ],
        },
        {
            title: "یراق‌آلات و اتصالات",
            linkCategory:"/product-category/22" ,
            links: [
                { title: "لولا کابینت", link: "/product-category/22/11" },
                { title: "ریل کشو", link: "/product-category/22/11" },
                { title: "دستگیره کابینت", link: "/product-category/22/11" },
                { title: "پیچ و اتصالات چوب", link: "/product-category/22/11" },
            ],
        },
    ];

    return <div className={styles.content}>
        <div>{items.map((el, i) => {

            return <Item key={i} item={el} />
        })}
            <div className={styles.seeMore}>
                <Link href={"/product-category"}>مشاهده بیشتر</Link>
                <span className="material-symbols-rounded">
                    arrow_back
                </span>
            </div>
        </div>
        <div className={styles.banner}>
            <Image
                src="/images/products.webp"
                alt="محصولات"
                fill
                style={{ objectFit: "cover" }}
            />
        </div>
    </div>
}