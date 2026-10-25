import TitleWrapper from "@/components/shares/TitleWrapper"
import styles from "./styles.module.css"
import Category from "@/components/shares/Category"

export default function Categories() {
    return <div className={ `tagsContainer  ${styles.categories}`}>
        <TitleWrapper title='دسته بندی محصولات' link='/' />

        <div className={styles.categoriesWrapper}>
            <Category title="ام‌دی‌اف(MDF)" desc="خام و روکش‌دار هایگلاس و ملامینه" link="/"/>
            <Category title="نئوپان" desc="خام و ملامینه در ضخامت ‌های مختلف" link="/"/>
            <Category title="اچ‌دی‌اف (HDF)" desc="پشت‌کار و ضخامت نازک" link="/"/>
            <Category title="نوار لبه (PVC)" desc="نوار لبه هم‌رنگ و طرح‌دار" link="/"/>
            <Category title="یراق آلات" desc="لولا، ریل دستگیره و جک" link="/"/>
        </div>
    </div>
}