import React, { useState } from "react"
import styles from "./Navigation.module.css"
import { useLocation, useNavigate } from "react-router-dom"

function Navigation() {
    
    const menuItems = {
        "/find_task": "Find task!",
        "/my_task": "My Task", 
        "/price": "Price",
        "/about_license": "About license",
        "/how_to_add": "How to add"
    }
    
    const location = useLocation() // Мега костыль, переделать
    const navigate = useNavigate()
    let defalt_active = [
        location.pathname === Object.keys(menuItems)[0], 
        location.pathname === Object.keys(menuItems)[1], 
        location.pathname === Object.keys(menuItems)[2], 
        location.pathname === Object.keys(menuItems)[3], 
        location.pathname === Object.keys(menuItems)[4]
    ]

    const [active, setActive] = useState(defalt_active)

    return (
        <nav className={styles.nav}>
            <h2 className={styles.heading}>Menu</h2>
            <ul className={styles.menu_list}>
                {Object.keys(menuItems).map((key : string, index) => {
                    const arr = new Array(5).fill(false)
                    arr[index] = true
                    const text = menuItems[key as keyof typeof menuItems]
                    return <li className={active[index] ? styles.menu_item + " " + styles.menu_item_active : styles.menu_item} onClick={
                                    () => {setActive(arr)
                                    navigate(key)
                                }}>
                                {text}
                            </li>
                })}
            </ul>
        </nav>
    )
}

export default Navigation