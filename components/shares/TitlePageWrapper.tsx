import styles from "./styles.module.css"

export default function TitlePageWrapper({ title }: { title: string }) {
    return <h1 className={styles.TitlePageWrapperTitle}>
        {title}
        <svg className={styles.customLine}></svg>
    </h1>
}