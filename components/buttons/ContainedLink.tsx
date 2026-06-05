import Link from "next/link"
import styles from "./styles.module.css"

interface Props {
    title: string
    href: string
    className?: string
    icon?: string
}
export default function ContainedLink({ title, href, className, icon }: Props) {

    const combinedClassName = `${styles.ContainedButton} ${className || ""}`.trim()

    return <Link href={href} className={combinedClassName}>{title}
        {icon && <span className="material-symbols-outlined">
            {icon}
        </span>}
    </Link>
}