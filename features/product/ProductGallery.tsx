
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export default function ProductGallery({ images = [] }) {
    const [activeImage, setActiveImage] = useState(0);

    if (!images.length) return null;

    return (
        <div className={styles.gallery}>
            <div className={styles.mainImage}>
                <Image
                    key={images[activeImage]}
                    src={images[activeImage]}
                    alt="تصویر محصول"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.mainImageContent}
                />
            </div>

            {images.length > 1 && (
                <div className={styles.thumbnails}>
                    {images.map((image, index) => (
                        <button
                            key={image}
                            type="button"
                            onClick={() => setActiveImage(index)}
                            className={`${styles.thumbnail} ${
                                activeImage === index ? styles.activeThumbnail : ""
                            }`}
                            aria-label={`نمایش تصویر ${index + 1}`}
                            aria-pressed={activeImage === index}
                        >
                            <Image
                                src={image}
                                alt={`تصویر ${index + 1} محصول`}
                                fill
                                sizes="100px"
                                className={styles.thumbnailImage}
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
