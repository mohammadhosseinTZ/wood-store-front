import { Button } from "@mui/material";

export default function PrintButton({ handlePrint, mt = "0px", printLoading, disable }: { handlePrint: () => void, disable?: boolean, mt?: string, printLoading?: boolean }) {
    return <Button
        disabled={disable}
        onClick={() => handlePrint()}
        loading={printLoading}
        sx={{
            border: "1px solid  var(  --Slate-300)",
            background: "var(  --Slate-300)",
            transition: ".3s",
            borderRadius: "32px",
            color: " var(--ColorBrand-700)",
            padding: "10px",
            minWidth: "113px",
            display: "flex",
            alignItems: "center",
            height: "46.5px",
            marginTop: mt,
            gap: "7px",
            ":hover": {
                color: "#fff",
                border: "1px solid #fff",
                background: "var(--ColorBrand-700)",
                "&>span": {
                    color: "#fff",
                },
            },
            "&>span": {

                color: disable ? "var( --Nuetral-500)" : " var(--ColorBrand-700)",
                fontSize: "20px",
                transition: ".3s",
            },
        }}
    >
        پرینت
        {!printLoading && <span className="material-symbols-rounded">print</span>}
    </Button>
}