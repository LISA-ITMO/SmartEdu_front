import React, { useState } from "react"
import styles from "./Auth.module.css"
import GoogleSVG from "../assets/Google.svg"
import GitHubSVG from "../assets/GitHub.svg"

function Auth() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [repeatPass, setRepeatPass] = useState("")

    const [isClickRegister, setClickRegister] = useState(false)

    return (
        <div className={styles.auth__container}>
            <div className={styles.auth__auth}>
                <h2 className={styles.auth__heading}>Авторизация</h2>
                <input type="text" className={styles.auth__input} placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <input type="password" className={styles.auth__input} placeholder="Password" value={pass} onChange={(e) => {setPass(e.target.value)}}/>
                <a href="/" className={styles.auth__forget_pass}>Забыли пароль?</a>
                <button className={`${styles.auth__enter} ${styles.button}`}>Войти</button>
                <div className={styles.auth__links}>
                    <img src={GoogleSVG} alt="Google" />
                    <img src={GitHubSVG} alt="GitHub" />
                </div>
            </div>
            <div className={styles.auth__register}>
                {isClickRegister ?
                    <div className={styles.auth__register__inner}>
                        <h2 className={`${styles.auth__heading} ${styles.register__heading}`}>Регистрация</h2>
                        <input type="text" className={styles.auth__input} placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                        <input type="text" className={styles.auth__input} placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        <input type="password" className={styles.auth__input} placeholder="Password" value={pass} onChange={(e) => {setPass(e.target.value)}}/>
                        <input type="password" className={styles.auth__input} placeholder="Repeat Password" value={repeatPass} onChange={(e) => {setRepeatPass(e.target.value)}}/>
                        <button className={`${styles.register__enter} ${styles.button}`}>Зарегистрироваться</button>
                    </div>
                :
                    <div className={styles.auth__register__inner}>
                        <h3 className={styles.auth__start_heading}>Что-то приветственное!</h3>
                        <p className={styles.auth__start_text}>Какой-то короткий текст, пока не придумала какой, но что-то завлекающее</p>
                        <button className={`${styles.register__enter} ${styles.button}`} onClick={() => {setClickRegister(true)}}>Регистрация</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Auth