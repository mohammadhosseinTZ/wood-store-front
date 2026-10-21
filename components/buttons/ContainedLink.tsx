import Link from "next/link"
import styles from "./styles.module.css"

interface Props {
    title: string
    href: string
    className?: string
    icon?: string
    themReverse?: boolean
}
export default function ContainedLink({ title, href, className, icon, themReverse = false }: Props) {

    const combinedClassName = `${styles.ContainedButton} ${themReverse && styles.themReverse} ${className || ""}`.trim()

    return <Link href={href} className={combinedClassName}>{title}
        {icon && <span className="material-symbols-outlined">
            {icon}
        </span>}
    </Link>
}