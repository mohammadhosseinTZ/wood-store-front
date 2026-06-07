import Link from "next/link"
import styles from "./styles.module.css"

interface Props {
    title: string
    href: string
    className?: string
    icon?: string
}
export default function OutlinedLink({ title, href, className, icon }: Props) {

    const outlinedClassName = `${styles.outlinedButton} ${className || ""}`.trim()

    return <Link href={href} className={outlinedClassName}>{title}
        {icon && <span className="material-symbols-outlined">
            {icon}
        </span>}
    </Link>
}