
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroPage from "@/components/layout/Hero";
import Articles from "@/features/index/Articles";
import Banner from "@/features/index/Banner";
import Cards from "@/features/index/Cards";
import Categories from "@/features/index/Categories";
import ListPrices from "@/features/index/LIstPrices";
import Products from "@/features/index/Products";




export default function HomePage() {

  return (
    <>

      <Header />
      <HeroPage />

      <div className="container">
        <Cards />
        <ListPrices />
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
