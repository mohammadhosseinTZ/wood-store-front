"use client";

import MenuMobile from "./MenuMobile";
import styles from "./styles.module.css"

type Props = {
    open: boolean;
    onClick: () => void;
};

export default function HamburgerButton({ open, onClick }: Props) {
    return (
        <>
            <button
                className={`${styles.hamburger} ${open ? styles.active : ""}`}
                onClick={onClick}
                aria-label="Toggle menu"
                aria-expanded={open}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <MenuMobile open={open} />
        </>
    );
}