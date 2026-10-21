import Image from "next/image"
import styles from "./styles.module.css"
import Link from "next/link"

type Props = Record<"image" | "title" | "desc" | "path", string>

export default function Article({ image, title, desc, path }: Props) {
    return (
        <div className={styles.article}>
            <Link href={path} className={styles.imageWrapper}>
                <Image alt='product' src={image} fill
                    style={{ objectFit: "cover" }}
                />
            </Link>
            <div className={styles.info}>
                <h5> <Link href={path}>{title}</Link> </h5>
                <p>{desc}</p>
                <Link href={path}>مشاهده</Link>
            </div>
        </div>
    )
}
