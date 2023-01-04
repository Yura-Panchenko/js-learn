import React from "react";
import Element from "../Element/Element";

import s from './style.module.css';

const Voting = () => {

    return (
        <div className={s.container}>
            <div className={s.wrap_reaction}>
                <Element icon="👍" />
                <Element icon="👎" />
                <Element icon="💚" />
                <Element icon="💩" />
                <Element icon="🤣" />
                <Element icon="🔥" />
            </div>
        </div>
    )
}

export default Voting;