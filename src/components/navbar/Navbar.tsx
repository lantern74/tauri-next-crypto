"use client";

import Link from "next/link";
import styles from "./Navbar.module.css"; // ✅ Import CSS module

import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.brand}>
          <Link className={styles.brandLink} href="/">
            <Logo />
            <p className={styles.logoText}>ACME</p>
          </Link>
        </div>
        <ThemeSwitch />
    </div>
  );
};
