
import styles from "./styles.module.css";

export default function ProductInfo({ product }) {
    return (
        <div className={styles.info}>
     

            <div className={styles.sellerCard}>
                <h3>فروشنده</h3>

                <div className={styles.infoRow}>
                    <span className="material-symbols-rounded">
                        language
                    </span>
                    <span>{product.seller}</span>
                </div>

                <div className={styles.infoRow}>
                    <span className="material-symbols-rounded">
                        verified_user
                    </span>
                    <span>ضمانت اصالت کالا</span>
                </div>

                <div className={styles.infoRow}>
                    <span className="material-symbols-rounded stockIcon">
                    fact_check
                    </span>
                    <span>
                        {product.available ? "موجود در انبار" : "ناموجود"}
                    </span>
                </div>

                <div className={styles.delivery}>
                    <span className="material-symbols-rounded">
                        local_shipping
                    </span>
                    <p>{product.delivery}</p>
                </div>
            </div>

            <div className={styles.specifications}>
                <h3>مشخصات محصول</h3>

                {product.specifications.map((item) => (
                    <div className={styles.specRow} key={item.label}>
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                    </div>
                ))}
            </div>

            <div className={styles.actions}>
                <a href="#order" className={styles.orderButton}>
                    ثبت سفارش
                </a>

                <a href="#similar-products" className={styles.similarButton}>
                    محصولات مشابه
                </a>
            </div>
        </div>
    );
}
