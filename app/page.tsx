
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroPage from "@/components/layout/Hero";
import Articles from "@/features/index/Articles";
import Banner from "@/features/index/Banner";
import Cards from "@/features/index/Cards";
import Categories from "@/components/shares/Categories";
import ListPrices from "@/features/index/LIstPrices";
import Products from "@/components/shares/Products";




export default function HomePage() {

  const categories = [
    {
      title: "ام‌دی‌اف (MDF)",
      desc: "خام و روکش‌دار هایگلاس و ملامینه",
      link: "/product-category/هایگلاس",
    },
    {
      title: "نئوپان",
      desc: "خام و ملامینه در ضخامت‌های مختلف",
      link: "/product-category/ملامینه",
    },
    {
      title: "اچ‌دی‌اف (HDF)",
      desc: "پشت‌کار و ضخامت نازک",
      link: "/product-category/HDF",
    },
    {
      title: "نوار لبه (PVC)",
      desc: "نوار لبه هم‌رنگ و طرح‌دار",
      link: "/product-category/PVC",
    },
    {
      title: "یراق آلات",
      desc: "لولا، ریل دستگیره و جک",
      link: "/product-category/یراق آلات",
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

  return (
    <>

      <Header />
      <HeroPage />

      <div className="container">
        <Cards />
        <ListPrices />
        <Categories categories={categories} />
        <Products products={products} />
      </div>
      <Banner />
      <div className="container">
        <Articles />
      </div>
      <Footer />
    </>
  )
}
