"use client";

import styles from "./styles.module.css"

export default function Shadow({
  children,
  shadow = true
}: Readonly<{
  children: React.ReactNode;
  shadow?: boolean
}>) {
  return <div className={`${styles.shadow} ${shadow ? '' : styles.noShadow}`} >{children}</div>
}
