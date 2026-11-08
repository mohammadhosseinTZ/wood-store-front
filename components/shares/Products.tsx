
"use client";

import { useState } from "react";

import Product from "@/components/shares/components/Product";
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



export default function Products({ title = "محصولات", products }: {
    title?: string, products: {
        id: number,
        image: string,
        title: string,
        desc: string,
        path: string
    }[]
}) {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    return (

        <div className={`container tagsContainer ${styles.products}`}>

            <Box className={styles.header}>
                <TitleWrapper title={title} link="/" />
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
