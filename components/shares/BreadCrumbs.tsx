"use client";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

type TLinks = {
  title: string;
  href: string;
};
type TBreadCrumbs = {
  lastItem: string;
  firstItem: string;
  links: TLinks[];
};

export default function BreadCrumbs_({ links }: { links: TBreadCrumbs }) {
  return (
    <>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={
            <ArrowBackIosRoundedIcon
              fontSize="small"
              sx={{ fontSize: "13px" }}
            />
          }
          aria-label="breadcrumb"
          sx={{ fontSize: "15px" }}
        >
          <Typography
            component={"span"}
            sx={{
              color: "var(--color-primary)",
              fontWeight: "400",
              fontSize: "15px",
            }}
          >
            {links.firstItem}
          </Typography>
          {links.links.map((el) => (
            <Link
              underline="hover"
              key="2"
              href={el.href}
              sx={{
                color: "var(--color-primary)",
                fontWeight: "400",
                fontSize: "15px",
              }}
            >
              {el.title}
            </Link>
          ))}
          <Typography key="3" sx={{ color: "var( --Blue-500)" }}>
            {links.lastItem}
          </Typography>
        </Breadcrumbs>
      </Stack>
    </>
  );
}
