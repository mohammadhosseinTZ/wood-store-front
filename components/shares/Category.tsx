import Link from "next/link";
import styles from "./styles.module.css"

export default function Category({ title, desc, link }: { title: string, desc: string, link: string }) {
    return <Link href={link} className={styles.category}>
        <h5>{title}</h5>
        <p>{desc}</p>
    </Link>
}