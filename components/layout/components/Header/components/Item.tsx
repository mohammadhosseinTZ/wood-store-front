import Link from "next/link"
import styles from "./styles.module.css"

export default function Item({ item }: {
    item: {
        title: string,
        links: { title: string, link: string }[],
    }
}) {
    return <div className={styles.itemWrapper}>
        <Link href={"/"}>{item.title}</Link>

        {item.links.map((el, i) => {
            return <Link href={el.link} key={i} className={styles.link}>
                {el.title}
                <span className="material-symbols-outlined">
                    arrow_back
                </span>
            </Link>
        })}
    </div>
}