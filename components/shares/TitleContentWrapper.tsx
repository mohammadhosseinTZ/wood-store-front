import styles from "./styles.module.css"

export default function TitleContentWrapper({ title }: { title: string }) {
    return <h1 className={styles.TitleContentWrapperTitle}>
        <svg className={styles.customLineLeft}></svg>
        <span className={styles.title}>{title}</span>
        <svg className={`${styles.customLineLeft} ${styles.customLineRight}`}></svg>
    </h1>
}