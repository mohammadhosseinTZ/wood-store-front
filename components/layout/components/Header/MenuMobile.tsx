import { Box } from "@mui/material"
import styles from "./styles.module.css"
import MenuItems from "./MenuItems"

export default function MenuMobile({ open }: { open: boolean }) {
    return <Box className={`${styles.mobileMenuWrapper} ${open ? styles.active : ''}`}>

        <MenuItems mobile={true} />
    </Box>
}