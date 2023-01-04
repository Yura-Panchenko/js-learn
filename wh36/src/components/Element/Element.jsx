import { React, useState } from "react";

import s from "./style.module.css";

const Element = ({icon}) => {

    const [count, setCount] = useState(0);

    const counter = () => {
        setCount(count + 1);
    }

    return (
        <div className={s.element}>
            <button className={s.button} onClick={counter}>{icon}</button>
            <div>{count}</div>
        </div>
    )
}

export default Element;