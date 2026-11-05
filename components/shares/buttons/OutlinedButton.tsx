import { Theme } from "@emotion/react";
import { Button, SxProps } from "@mui/material";
import { ReactElement } from "react";

export default function OutlinedButton({
  title,
  onClicked,
  customCss,
  icon,
  type = "button"
}: {
  title: string;
  onClicked?: () => void;
  icon?: ReactElement;
  customCss?: SxProps<Theme>;
  type?: "submit" | "button"
}) {
  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: "100px",
        width: "120px",
        padding: "2px",
        color: "var(  --ColorBrand-500)",
        borderColor: "var(  --ColorBrand-500)",
        ...customCss,
      }}
      onClick={onClicked}
      endIcon={icon}
      type={type}
    >
      {title}
    </Button>
  );
}
