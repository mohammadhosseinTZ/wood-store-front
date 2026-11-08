
import ProductGallery from "@/features/product/ProductGallery";
import ProductInfo from "@/features/product/ProductInfo";
import styles from "./styles.module.css"

const product = {
    title: "ام دی اف ساده",
    category: "محصولات چوبی / MDF",
    description:
        "ورق MDF با کیفیت مناسب برای ساخت انواع کابینت، دکوراسیون داخلی و مصنوعات چوبی.",
    seller: "چوبرو",
    available: true,
    delivery: "ارسال توسط مرجع تخصصی فرآورده‌های چوبی.",
    images: [
        "/images/products/mdf-1.webp",
        "/images/products/mdf-2.webp",
        "/images/products/mdf-3.webp",
        "/images/products/mdf-4.webp",
    ],
    specifications: [
        { label: "نوع محصول", value: "MDF ساده" },
        { label: "ابعاد", value: "122 × 244 سانتی‌متر" },
        { label: "ضخامت", value: "16 میلی‌متر" },
        { label: "برند", value: "متفرقه" },
    ],
};

export default function ProductPage() {
    return (
        <main className={styles.container}>
            <section className={styles.productLayout}>
                <ProductGallery images={product.images} />
                <ProductInfo product={product} />
            </section>
        </main>
    );
}
