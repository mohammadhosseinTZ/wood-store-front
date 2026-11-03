import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from "@mui/material";

import CallUs from "./CallUs";
import Content from "./Content";
import styles from "./styles.module.css";

export default function SubHeaderMobile() {
    return (
        <Accordion
            disableGutters
            elevation={0}
            sx={{ background: "transparent" }}
            className={styles.dropdownMobileContainer}
        >
            <AccordionSummary
                expandIcon={
                    <span className="material-symbols-rounded">
                        keyboard_arrow_down
                    </span>
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className={styles.accordionSummary}
            >
                <div className={styles.dropdown}>
                    محصولات
                </div>
            </AccordionSummary>

            <AccordionDetails>
                <div className={styles.dropdownResultWrapper}>
                    <div className={styles.dropdownResult}>
                        <Content />
                        {/* <CallUs /> */}
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    );
}