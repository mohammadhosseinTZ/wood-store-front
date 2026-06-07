import { ReactElement } from "react"
import styles from "./styles.module.css"

type Props = {
    "title": string, 'desc': string, 'icon': ReactElement
}
export default function Card({ title, desc, icon }: Props) {
    return (
        <div className={styles.card}>
            {icon}
            <h6>{title}</h6>
            <p>{desc}</p>
        </div>
    )
}
