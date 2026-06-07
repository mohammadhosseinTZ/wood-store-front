import Link from "next/link"
import styles from "./styles.module.css"

interface Props {
    title: string, link?: string
}

export default function TitleWrapper({ title, link }: Props) {
    return (
        <div className={styles.titleWrapper}>
            <span>{title}</span>
            {link && <Link href={link}>مشاهده بیشتر <span className="material-symbols-outlined">
                keyboard_arrow_left
            </span></Link>}
        </div>
    )
}
