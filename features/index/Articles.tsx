"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Article from "@/components/shares/Article";
import TitleWrapper from "@/components/shares/TitleWrapper";
import styles from "./styles.module.css";
import { Navigation, Pagination } from "swiper/modules";

export default function Articles() {
    return (
        <div className={`tagsContainer ${styles.articles}`}>
            <TitleWrapper title="مقالات" link="/" />

            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={
                    {
                        clickable: true
                    }
                }
                spaceBetween={20}
                slidesPerView={5}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}
            >
                <SwiperSlide>
                    <Article
                        image="/images/hero3.jpg"
                        title="MDF ساده"
                        desc="تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT) و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر"
                        path="/"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Article
                        image="/images/hero3.jpg"
                        title="MDF ساده"
                        desc="تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT) و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر"
                        path="/"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Article
                        image="/images/hero3.jpg"
                        title="MDF ساده"
                        desc="تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT) و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر"
                        path="/"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Article
                        image="/images/hero3.jpg"
                        title="MDF ساده"
                        desc="تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT) و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر"
                        path="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Article
                        image="/images/hero3.jpg"
                        title="MDF ساده"
                        desc="تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT) و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر"
                        path="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Article
                        image="/images/hero3.jpg"
                        title="MDF ساده"
                        desc="تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT) و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر"
                        path="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Article
                        image="/images/hero3.jpg"
                        title="MDF ساده"
                        desc="تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT) و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر"
                        path="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Article
                        image="/images/hero3.jpg"
                        title="MDF ساده"
                        desc="تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT) و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر"
                        path="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Article
                        image="/images/hero3.jpg"
                        title="MDF ساده"
                        desc="تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT) و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر"
                        path="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Article
                        image="/images/hero3.jpg"
                        title="MDF ساده"
                        desc="تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT) و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر"
                        path="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Article
                        image="/images/hero3.jpg"
                        title="MDF ساده"
                        desc="تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT) و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر"
                        path="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Article
                        image="/images/hero3.jpg"
                        title="MDF ساده"
                        desc="تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT) و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر"
                        path="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Article
                        image="/images/hero3.jpg"
                        title="MDF ساده"
                        desc="تخته چندلایی (پلای وود) روسی با برند سوِزا sveza ابعاد 122 در 244 (cm) (EXT) و 152در152(cm) (INT) ضخامت 3 میلیمتر تا 30 میلیمتر"
                        path="/"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}