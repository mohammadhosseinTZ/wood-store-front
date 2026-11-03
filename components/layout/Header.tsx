"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import MenuItems from "./components/Header/MenuItems"
import HamburgerButton from "./components/Header/HamburgerButton";
import { Box } from "@mui/material";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className={styles.siteDesc}>
                أخرین بروزرسانی قیمت‌ها:۱۴۰۵/۰۸/۰۲
            </div>

            <header
                className={`${styles.header}  ${isScrolled ? styles.scrolled : ""}`}
            >
                <div className="container">

                    <HamburgerButton
                        open={open}
                        onClick={() => setOpen(!open)}
                    />
                    <div className={styles.buttons}>


                        <Link href="/">
                            ۰۲۱ ۴۴۲۲۱۹۰۳
                            <span className="material-symbols-rounded">
                                call
                            </span>

                        </Link>
                    </div>
                    <Box className={styles.menuItems}>
                        <MenuItems />
                    </Box>

                    <h6>مهدی تشکر</h6>
                </div>
            </header>
        </>
    );
}