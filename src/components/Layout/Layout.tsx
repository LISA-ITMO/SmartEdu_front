import React from "react"
import styles from "./Layout.module.css"
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"

interface ChildType {
    children: React.ReactNode
}

function Layout({children} : ChildType) {
    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <Header />
                <main className={styles.main}>
                    <Navigation />
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout