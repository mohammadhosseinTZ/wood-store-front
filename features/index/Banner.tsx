import Image from "next/image"
import styles from "./styles.module.css"
import OutlinedLink from "@/components/buttons/OutlinedLink"

export default function Banner() {
    return (
        <div className={ `tagsContainer ${styles.banner}`}>
            <div className={styles.imageBanner}>
                <div >
                    <Image src={"/images/mdfs.png"} alt="MDF" fill style={{ objectFit: "cover" }} />
                </div>
            </div>
            <div className={styles.callUs}>
                <p>برای خرید به مشاوره  نیاز دارید؟
                </p>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            <OutlinedLink href="/" title="تماس با ما" />
            </div>
        </div>
    )
}
