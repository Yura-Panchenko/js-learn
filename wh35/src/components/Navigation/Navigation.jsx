import React from "react";
import s from './style.module.css';

const Navigation = () => {
    return (
        <nav>
            <ul className={s.menu}>
                <li className={s.item}><a className={s.link} href="#">Home</a></li>
                <li className={s.item}><a className={s.link} href="#">About</a></li>
                <li className={s.item}><a className={s.link} href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;