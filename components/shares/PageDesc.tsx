import BreadCrumbs_ from "./BreadCrumbs";
import TitlePageWrapper from "./TitlePageWrapper";
import styles from "./styles.module.css"

type Props = {
    bread_crumbs: {
        lastItem: string,
        firstItem: string,
        links: { title: string, href: string }[],
    },
    titlePageWrapper: string
    desc: string
}

export default function PageDesc({ bread_crumbs, desc, titlePageWrapper }: Props) {
    return <>

        <BreadCrumbs_ links={bread_crumbs} />

        <div className={styles.pageDesc}>

            <TitlePageWrapper title={titlePageWrapper} />

            <p>
                {desc}
            </p>

        </div>
    </>
}