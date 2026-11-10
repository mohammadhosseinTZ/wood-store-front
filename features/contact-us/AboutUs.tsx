import styles from "./styles.module.css"
export default function AboutUs() {
    return <div className={`tagsContainer ${styles.aboutUsWrapper}`}>
        <div className={ ` ${styles.map} `}>
            <iframe
                src="https://www.google.com/maps?q=Tehran&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
        <div className={` ${styles.aboutUs}`}>
            <div className="">
                <div className={styles.bold}>آدرس شرکت</div>
                <div className="">
                    <div> تهران؛ خیابان شریعتی، سه راه طالقانی، ابتدای خیابان خواجه نصیر الدین طوسی، پلاک ۲۴۷ </div>
                    <div>تلفن دفتر مرکزی : 82800000-021</div>
                    <div>تلفن پشتیبانی 24 ساعته : 82800000-021</div>
                    <div>فکس : 82800000-021 داخلی 6</div>
                    <div>ایمیل : office@sgas.ir</div>
                    <div className="">کد پستی : 1611613611</div>
                    <div className={` ${styles.title} ${styles.bold}` } >اطلاعات حساب</div>
                    <div className="">بانک ملت (به نام شبکه گستران آریا سامانه)</div>
                    <div>شماره کارت : <span dir="ltr">6104-3386-4621-9036</span></div>
                    <div>شماره حساب : <span dir="ltr">9865699706</span></div>
                    <div className="mb-3">شماره شبا : <span dir="ltr">IR610120020000009865699706</span></div>
                    <div className="">بانک اقتصاد نوین (به نام شبکه گستران آریا سامانه)</div>
                    <div>شماره کارت : <span dir="ltr">6274-1270-0004-0052</span></div>

                    <div>شماره حساب : <span dir="ltr">207-445-81646464-1</span></div>
                    <div>شماره شبا : <span dir="ltr">IR630550020744581646464001</span></div>
                </div></div>
        </div>
    </div>
}