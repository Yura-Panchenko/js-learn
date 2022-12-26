import React from "react";
import ContentPage from "./ContentPage/ContentPage";
import Sidebar from "./Sidebar/Sidebar";

import s from './style.module.css';

const Content = () => {
    return (
        <main className={s.main}>
            <Sidebar></Sidebar>
            <ContentPage></ContentPage>
        </main>
    )
}

export default Content;