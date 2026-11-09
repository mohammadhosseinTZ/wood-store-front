import ProductGallery from "./ProductGallery"
import ProductInfo from "./ProductInfo"
import styles from "./styles.module.css"

export default function ProductLayout({ product }: { product: any }) {
    return <div className={` tagsContainer ${styles.productLayout}`}>
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
    </div>
}