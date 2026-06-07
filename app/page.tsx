import Header from "@/components/layout/Header";
import HeroPage from "@/components/layout/Hero";
import Cards from "@/features/index/Cards";

export default function page() {
  return (
    <>
      <Header />
      <HeroPage />
      <div className="container">
        <Cards />
      </div>
    </>
  )
}
