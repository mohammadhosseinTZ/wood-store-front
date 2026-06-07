"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${styles.header}  ${isScrolled ? styles.scrolled : ""}`}
        >
            <div className="container">
                <div className={styles.buttons}>
                    <Link href="/">
                        <span className="material-symbols-outlined">
                            shopping_bag
                        </span>
                    </Link>

                    <Link href="/">
                        <span className="material-symbols-outlined">
                            call
                        </span>
                    </Link>
                </div>

                <ul>
                    <li><Link href="/">صفحه اصلی</Link></li>
                    <li><Link href="/">محصولات</Link></li>
                    <li><Link href="/">درباره ما</Link></li>
                    <li><Link href="/">تماس با ما</Link></li>
                </ul>

                <h6>مهدی تشکر</h6>
            </div>
        </header>
    );
}