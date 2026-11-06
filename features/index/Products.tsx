
"use client";

import { useState } from "react";

import Product from "@/components/shares/Product";
import TitleWrapper from "@/components/shares/TitleWrapper";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";

import styles from "./styles.module.css";
import { Navigation } from "swiper/modules";

const products = [
    {
        id: 1,
        image: "/images/hero3.jpg",
        title: "MDF ساده",
        desc: "تخته چندلایی (پلای وود) روسی با برند سوِزا Sveza ابعاد 122 در 244 سانتی‌متر، ضخامت 3 تا 30 میلی‌متر",
        path: "/",
    },
    {
        id: 2,
        image: "/images/hero3.jpg",
        title: "MDF هایگلاس",
        desc: "تخته چندلایی با کیفیت بالا و تنوع رنگ و طرح مناسب برای کابینت و دکوراسیون داخلی",
        path: "/",
    },
    {
        id: 3,
        image: "/images/hero3.jpg",
        title: "MDF ملامینه",
        desc: "ورق MDF ملامینه در ابعاد و ضخامت‌های مختلف مناسب برای مصارف صنعتی و خانگی",
        path: "/",
    },
    {
        id: 4,
        image: "/images/hero3.jpg",
        title: "نئوپان",
        desc: "انواع ورق نئوپان با کیفیت و ابعاد متنوع",
        path: "/",
    },
    {
        id: 5,
        image: "/images/hero3.jpg",
        title: "پلای وود",
        desc: "تخته چندلایی روسی با برندهای معتبر و کیفیت بالا",
        path: "/",
    },
];

export default function Products() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    return (

        <div className={`container tagsContainer ${styles.products}`}>

            <Box className={styles.header}>
                <TitleWrapper title="محصولات" link="/" />
            </Box>

            <Swiper
                dir="rtl"
                modules={[Navigation]}
                navigation
                onSwiper={setSwiper}
                slidesPerView={1.2}
                spaceBetween={12}
                breakpoints={{
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    900: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                }}
                className={styles.productsSwiper}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <Product
                            image={product.image}
                            title={product.title}
                            desc={product.desc}
                            path={product.path}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    );
}
