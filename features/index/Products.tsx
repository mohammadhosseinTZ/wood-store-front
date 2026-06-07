import Product from '@/components/shares/Product'
import TitleWrapper from '@/components/shares/TitleWrapper'
import styles from "./styles.module.css"

export default function Products() {
    return (
        <div className={styles.products}>
            <TitleWrapper title='محصولات' link='/' />

            <div className={styles.productsWrapper}>
                <Product image='/images/hero3.jpg' title='MDF ساده' desc='تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT)  و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر' path='/' />
                <Product image='/images/hero3.jpg' title='MDF ساده' desc='تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT)  و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر' path='/' />
                <Product image='/images/hero3.jpg' title='MDF ساده' desc='تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT)  و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر' path='/' />
                <Product image='/images/hero3.jpg' title='MDF ساده' desc='تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT)  و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر' path='/' />
                <Product image='/images/hero3.jpg' title='MDF ساده' desc='تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT)  و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر' path='/' />
            </div>
        </div>
    )
}
