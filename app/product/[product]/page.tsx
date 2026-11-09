
import styles from "./styles.module.css"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageDesc from "@/components/shares/PageDesc";
import TableOfCategories from "@/features/product-category/TableOfCategories";
import TitleContentWrapper from "@/components/shares/TitleContentWrapper";
import ProductLayout from "@/components/shares/products/ProductLayout";


const product = {
    title: "ام دی اف ساده",
    category: "محصولات چوبی / MDF",
    description:
        "ورق MDF با کیفیت مناسب برای ساخت انواع کابینت، دکوراسیون داخلی و مصنوعات چوبی.",
    seller: "چوبرو",
    available: true,
    delivery: "ارسال توسط مرجع تخصصی فرآورده‌های چوبی.",
    images: [
        "/images/hero4.jpeg",
        "/images/hero5.jpeg",
        "/images/hero4.jpeg",
        "/images/hero4.jpeg",
    ],
    specifications: [
        { label: "نوع محصول", value: "MDF ساده" },
        { label: "ابعاد", value: "122 × 244 سانتی‌متر" },
        { label: "ضخامت", value: "16 میلی‌متر" },
        { label: "برند", value: "متفرقه" },
    ],
};

const bread_crumbs = {
    lastItem: "دسته‌بندی محصولات",
    firstItem: "صفحه اصلی",
    links: [
        // { title: "اطلاعات پایه", href: "/" },
    ],
};

export default function ProductPage() {
    return (
        <main >
            <Header />

            <section className={` container pagesWrapper ${styles.productLayoutWrapper} `}>

                <PageDesc bread_crumbs={bread_crumbs} desc="   مشاهده انواع محصولات چوب روسی و بررسی قیمت روز
                        آن‌ها در این صفحه." titlePageWrapper="دسته‌بندی چوب روسی" />

         

                <ProductLayout product={product}/>

                <div className="tagsContainer">
                <TitleContentWrapper title="قیمت روز" />
                    <TableOfCategories />
                </div>
            </section>

            <Footer />

        </main>
    );
}
