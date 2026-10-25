import Card from '@/components/shares/Card'
import styles from "./styles.module.css"
import Image from 'next/image'

export default function Cards() {
    return (
        <div className={`tagsContainer ${styles.cards}`}>
            <Card
                icon={<Image alt='reasonable-price' src={"/icons/price.png"} width={60} height={60}  />}
                title='کف قیمت'
                desc='پایین ترین قیمت ها در صنایع چوبی تشکر '
            />
            <Card
                icon={<Image alt='satisfaction' src={"/icons/satisfaction.png"} width={60} height={60}  />}
                title='برای یک خرید لذت‌بخش'
                desc='تجربه یک خرید لذت‌بخش با بهترین کیفیت را با ما داشته باشید'
            />
            <Card
                icon={<Image alt='freight' src={"/icons/send.png"} width={60} height={60}  />}
                title='ارسال به سراسر کشور'
                desc='ارسال به سراسر کشور در سریع ترین زمان'
            />
            <Card
                icon={<Image alt='call' src={"/icons/call.png"} width={60} height={60}  />}
                title='ثبت سفارش'
                desc='ثبت سفارش از طریق تماس با کارشناسان ما'
            />
        </div>
    )
}
