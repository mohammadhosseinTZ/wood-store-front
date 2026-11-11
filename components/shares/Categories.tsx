import TitleWrapper from "@/components/shares/TitleWrapper"
import styles from "./styles.module.css"
import Category from "@/components/shares/components/Category"

export default function Categories({ title = "دسته بندی محصولات", bgVisible = false, categories }:
    { title?: string, bgVisible?: boolean, categories: { title: string, desc: string, link: string }[] }) {
    return <div className={`tagsContainer ${styles.categoriesWrapper}`}>
        {bgVisible && <div className={styles.bg}></div>}

        <div className={` container  ${styles.categories}`}>
            <TitleWrapper title={title} link='/' />

            <div className={styles.categoriesWrapper}>
                {
                    categories.map(c => <Category title={c.title} desc={c.desc} link={c.link} />)
                }

            </div>
        </div>
    </div>
}