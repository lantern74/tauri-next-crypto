"use client";
import { useSidebar } from "../../context/SidebarContext"; // ✅ Import Sidebar Context
import { Navbar } from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import styles from "./LayoutContent.module.css";

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
    const { isOpen } = useSidebar(); // ✅ Get Sidebar State

    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={`${styles.mainContent} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
                <Navbar />
                <main>{children}</main>
            </div>
        </div>
    );
};

export default LayoutContent;
