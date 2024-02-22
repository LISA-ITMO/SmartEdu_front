import React, { useState } from "react"
import styles from "./Navigation.module.css"
import { useLocation, useNavigate } from "react-router-dom"

function Navigation() {
    
    const location = useLocation() // Мега костыль, переделать
    let defalt_active = [true, false, false, false, false]
    const navigate = useNavigate()
    if (location.pathname === "/find_task") {
        defalt_active = [true, false, false, false, false]
    } else if (location.pathname === "/my_task") {
        defalt_active = [false, true, false, false, false]
    } else if (location.pathname === "/price") {
        defalt_active = [false, false, true, false, false]
    } else if (location.pathname === "/about_license") {
        defalt_active = [false, false, false, true, false]
    } else if (location.pathname === "/how_to_add") {
        defalt_active = [false, false, false, false, true]
    }

    const [active, setActive] = useState(defalt_active)
    const menuItems = ["Find task!", "My Task", "Price", "About license", "How to add"]
    const routes = ["/find_task", "/my_task", "/price", "/about_license", "/how_to_add"]

    return (
        <nav className={styles.nav}>
            <h2 className={styles.heading}>Menu</h2>
            <ul className={styles.menu_list}>
                {menuItems.map((item, index) => {
                    const arr = new Array(5).fill(false)
                    arr[index] = true
                    return <li className={active[index] ? styles.menu_item + " " + styles.menu_item_active : styles.menu_item} onClick={
                            () => {setActive(arr)
                            navigate(routes[index])
                        }}>
                        {item}
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Navigation