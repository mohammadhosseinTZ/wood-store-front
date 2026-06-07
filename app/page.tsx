import Header from "@/components/layout/Header";
import HeroPage from "@/components/layout/Hero";
import Banner from "@/features/index/Banner";
import Cards from "@/features/index/Cards";
import Products from "@/features/index/Products";

export default function page() {
  return (
    <>
      <Header />
      <HeroPage />
      <div className="container">
        <Cards />
        <Products />
      </div>
      <Banner />
    </>
  )
}
