import React from "react";
import styles from "./Header.module.css"
import icon from "/icon_white.svg"
import menuSvg from "/menu.svg"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <img src={icon} alt="icon.svg" width={33}/>
                <h2 className={styles.heading}>TaskHub</h2>
            </div>
            <div className={styles.menu}>
                <button className={styles.loginBtn}><strong>LogIn</strong></button>
                <button className={styles.menuBtn}>
                    <img src={menuSvg} alt="menu.svg" width={12}/>
                </button>
            </div>
        </header>
    )
}

export default Header