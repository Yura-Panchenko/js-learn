import React from "react";
import Navigation from "../../Navigation/Navigation";

import s from './style.module.css';

const Sidebar = () => {
    return (
        <aside className={s.aside}>
            <Navigation></Navigation>
        </aside>
    )
}

export default Sidebar;