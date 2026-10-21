"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import SubHeader from "./components/Header/SubHeader";

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
                        ۰۲۱ ۴۴۲۲۱۹۰۳
                        <span className="material-symbols-outlined">
                            call
                        </span>

                    </Link>
                </div>

                <ul className={styles.items}>
                    <li><Link href="/">صفحه اصلی</Link></li>
                    <li>
   
                            <SubHeader />
                    </li>
                    <li><Link href="/">درباره ما</Link></li>
                    <li><Link href="/">تماس با ما</Link></li>
                </ul>



                <h6>مهدی تشکر</h6>
            </div>
        </header>
    );
}