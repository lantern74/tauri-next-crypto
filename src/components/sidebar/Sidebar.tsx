"use client";
import { useSidebar } from "../../context/SidebarContext"; // ✅ Import Sidebar Context
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiSettings, FiDatabase, FiGrid, FiMenu } from "react-icons/fi";
import styles from "./Sidebar.module.css"; // ✅ Use Normal CSS

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar(); // ✅ Get Sidebar State
  const pathname = usePathname();

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.expanded : styles.collapsed}`}>
      {/* Sidebar Toggle Button */}
      <div className={styles.sidebarHeader}>
        <h2 className={`${styles.title} ${isOpen ? styles.show : styles.hide}`}>Dashboard</h2>
        <button onClick={toggleSidebar} className={styles.menuButton}>
          <FiMenu size={24} />
        </button>
      </div>

      {/* Sidebar Links */}
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/dashboard">
              <div className={`${styles.navItem} ${pathname === "/dashboard" ? styles.active : ""}`}>
                <FiGrid size={20} />
                <span className={`${isOpen ? styles.show : styles.hide}`}>Dashboard</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <div className={`${styles.navItem} ${pathname === "/settings" ? styles.active : ""}`}>
                <FiSettings size={20} />
                <span className={`${isOpen ? styles.show : styles.hide}`}>Settings</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/database">
              <div className={`${styles.navItem} ${pathname === "/database" ? styles.active : ""}`}>
                <FiDatabase size={20} />
                <span className={`${isOpen ? styles.show : styles.hide}`}>Database</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
