
import styles from "./styles.module.css";

export default function ProductInfo({ product }) {
    return (
        <div className={styles.info}>
            <div className={styles.productHeading}>
                <span className={styles.category}>
                    {product.category}
                </span>

                <h1>{product.title}</h1>

                <p className={styles.description}>
                    {product.description}
                </p>
            </div>

            <div className={styles.sellerCard}>
                <h3>فروشنده</h3>

                <div className={styles.infoRow}>
                    <span className="material-symbols-outlined">
                        storefront
                    </span>
                    <span>{product.seller}</span>
                </div>

                <div className={styles.infoRow}>
                    <span className="material-symbols-outlined">
                        verified_user
                    </span>
                    <span>ضمانت اصالت کالا</span>
                </div>

                <div className={styles.infoRow}>
                    <span className="material-symbols-outlined stockIcon">
                        inventory_2
                    </span>
                    <span>
                        {product.available ? "موجود در انبار" : "ناموجود"}
                    </span>
                </div>

                <div className={styles.delivery}>
                    <span className="material-symbols-outlined">
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
