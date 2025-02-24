"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { FaBtc } from "react-icons/fa";
import { SiBitcoincash, SiBinance, SiDogecoin, SiLitecoin, SiTether, SiSolana } from "react-icons/si";
import { TbCurrencyXrp } from "react-icons/tb";

const TronIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 2L21 5L13 20L3 2ZM4.6 3.6L12.5 17.3L18.9 5.8L4.6 3.6ZM7.5 6L16 7.7L12.6 14.4L7.5 6ZM6.8 7.2L11.5 14.9L6 7.6L6.8 7.2Z"
            fill="#D9002D"
        />
    </svg>
);

const coins = [
    { id: "btc", name: "Bitcoin", icon: <FaBtc size={30} color="#F7931A" /> },
    { id: "bch", name: "Bitcoin Cash", icon: <SiBitcoincash size={30} color="#4CCA47" /> },
    { id: "bnb", name: "Binance Coin", icon: <SiBinance size={30} color="#F3BA2F" /> },
    { id: "doge", name: "Dogecoin", icon: <SiDogecoin size={30} color="#C2A633" /> },
    { id: "ltc", name: "Litecoin", icon: <SiLitecoin size={30} color="#345D9D" /> },
    { id: "tron", name: "Tron", icon: <TronIcon/> },
    { id: "tether", name: "Tether", icon: <SiTether size={30} color="#26A17B" /> },
    { id: "xrp", name: "XRP", icon: <TbCurrencyXrp size={30} color="#fff" /> },
    { id: "sol", name: "Solana", icon: <SiSolana size={30} color="#00FFAD" /> },
];

export default function DashboardPage() {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleSelection = (id: string) => {
        setSelected((prev) =>
        prev.includes(id) ? prev.filter((coin) => coin !== id) : [...prev, id]
        );
    };

    return (
        <div className={styles.dashboard}>
            <h1 className={styles.title}>Select Your Cryptocurrency</h1>
            <div className={styles.grid}>
                {coins.map((coin) => (
                    <div
                        key={coin.id}
                        className={`${styles.card} ${selected.includes(coin.id) ? styles.selected : ""}`}
                        onClick={() => toggleSelection(coin.id)}
                    >
                        <div className={styles.icon}>{coin.icon}</div>
                        <p className={styles.text}>{coin.name}</p>
                        {selected.includes(coin.id) && <div className={styles.checkbox}>✔</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}
