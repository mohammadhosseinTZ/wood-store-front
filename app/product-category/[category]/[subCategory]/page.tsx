import Header from "@/components/layout/Header";
import BreadCrumbs_ from "@/components/shares/BreadCrumbs";
import TableOfCategories from "@/features/product-category/TableOfCategories";
import styles from "./../styles.module.css"
import TitlePageWrapper from "@/components/shares/TitlePageWrapper";
import Footer from "@/components/layout/Footer";
import Products from "@/components/shares/Products";
import Categories from "@/components/shares/Categories";
import PageDesc from "@/components/shares/PageDesc";

export default function ProductCategory() {

    const bread_crumbs = {
        lastItem: "دسته‌بندی محصولات",
        firstItem: "صفحه اصلی",
        links: [
            // { title: "اطلاعات پایه", href: "/" },
        ],
    };

    const categories = [
        {
            title: "ام‌دی‌اف (MDF)",
            desc: "خام و روکش‌دار هایگلاس و ملامینه",
            link: "/product-category/هایگلاس/هایگلاس",
        },
        {
            title: "نئوپان",
            desc: "خام و ملامینه در ضخامت‌های مختلف",
            link: "/product-category/ملامینه/هایگلاس",
        },
        {
            title: "اچ‌دی‌اف (HDF)",
            desc: "پشت‌کار و ضخامت نازک",
            link: "/product-category/HDF/هایگلاس",
        },
        {
            title: "نوار لبه (PVC)",
            desc: "نوار لبه هم‌رنگ و طرح‌دار",
            link: "/product-category/PVC/هایگلاس",
        },
        {
            title: "یراق آلات",
            desc: "لولا، ریل دستگیره و جک",
            link: "/product-category/یراق آلات/هایگلاس",
        },
    ];

    const products = [
        {
            id: 1,
            image: "/images/hero3.jpg",
            title: "MDF ساده",
            desc: "تخته چندلایی (پلای وود) روسی با برند سوِزا Sveza ابعاد 122 در 244 سانتی‌متر، ضخامت 3 تا 30 میلی‌متر",
            path: "/product/چوب راش",
        },
        {
            id: 2,
            image: "/images/hero3.jpg",
            title: "MDF هایگلاس",
            desc: "تخته چندلایی با کیفیت بالا و تنوع رنگ و طرح مناسب برای کابینت و دکوراسیون داخلی",
            path: "/product/چوب راش",
        },
        {
            id: 3,
            image: "/images/hero3.jpg",
            title: "MDF ملامینه",
            desc: "ورق MDF ملامینه در ابعاد و ضخامت‌های مختلف مناسب برای مصارف صنعتی و خانگی",
            path: "/product/چوب راش",
        },
        {
            id: 4,
            image: "/images/hero3.jpg",
            title: "نئوپان",
            desc: "انواع ورق نئوپان با کیفیت و ابعاد متنوع",
            path: "/product/چوب راش",
        },
        {
            id: 5,
            image: "/images/hero3.jpg",
            title: "پلای وود",
            desc: "تخته چندلایی روسی با برندهای معتبر و کیفیت بالا",
            path: "/product/چوب راش",
        },
    ];

    return <main >
        <Header />


        <div className="container pagesWrapper">
            <div>
                <PageDesc bread_crumbs={bread_crumbs} desc="   مشاهده انواع محصولات چوب روسی و بررسی قیمت روز
                        آن‌ها در این صفحه." titlePageWrapper="دسته‌بندی چوب روسی" />



                <div className="tagsContainer">
                    <TableOfCategories />
                </div>

                <div className="tagsContainer">
                    <Products title="محصولات دسته‌بندی چوب روسی" products={products} />
                </div>

                <div className="tagsContainer">
                    <Categories
                        categories={categories}
                        title="دسته‌بندی های چوب روسی" />
                </div>
            </div>
        </div>

        <Footer />

    </main>
}