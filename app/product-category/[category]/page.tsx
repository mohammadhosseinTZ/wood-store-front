import Header from "@/components/layout/Header";
import BreadCrumbs_ from "@/components/shares/BreadCrumbs";
import TableOfCategories from "@/features/product-category/TableOfCategories";
import styles from "./styles.module.css"
import TitlePageWrapper from "@/components/shares/TitlePageWrapper";
import Footer from "@/components/layout/Footer";

export default function ProductCategory() {

    const bread_crumbs = {
        lastItem: "دسته‌بندی محصولات",
        firstItem: "صفحه اصلی",
        links: [
            // { title: "اطلاعات پایه", href: "/" },
        ],
    };

    return <main >
        <Header />


        <div className="container pagesWrapper">
            <div>
                <BreadCrumbs_ links={bread_crumbs} />

                <div className={styles.pageDesc}>

                    <TitlePageWrapper title="محصولات چوب روسی" />

                    <p>
                        مشاهده انواع محصولات چوب روسی و بررسی قیمت روز
                        آن‌ها در این صفحه.
                    </p>
                </div>

            </div>
            <TableOfCategories />


        </div>

        <Footer />

    </main>
}