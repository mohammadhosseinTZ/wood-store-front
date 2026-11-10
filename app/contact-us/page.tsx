import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutUs from "@/features/contact-us/AboutUs";
import BannerContactUs from "@/features/contact-us/BannerContactUs";

export default function ContactUs() {
    return <>
        <Header />
        <section className={` container  pagesWrapper `}>
            <BannerContactUs />
            <AboutUs />
        </section>
        <Footer />
    </>
}