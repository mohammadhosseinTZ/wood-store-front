import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroPage from "@/components/layout/Hero";
import Articles from "@/features/index/Articles";
import Banner from "@/features/index/Banner";
import Cards from "@/features/index/Cards";
import Categories from "@/features/index/Categories";
import Products from "@/features/index/Products";

export default function page() {
  return (
    <>

      <Header />
      <HeroPage />
      <div className="container">
        <Cards />
        <Categories />
        <Products />
      </div>
      <Banner />
      <div className="container">
        <Articles />
      </div>
      <Footer />
    </>
  )
}
