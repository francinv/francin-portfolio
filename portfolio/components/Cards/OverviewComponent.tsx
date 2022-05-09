import React, { FC } from "react";
import style from "./Card.module.css";

interface OverviewComponentProps {
    title: string;
    value: number;
    Icon: FC;
}

const OverviewComponent: FC<OverviewComponentProps> = ({ title, value, Icon }) => {
    return (
        <div className={`${style.flex_row} ${style.hover_translateX}`}>
            <Icon />
            <p className={`${style.text_title}`}>{title}</p>
            <p className={`${style.text_value} ${style.hover_scale}`}>{value}</p>
        </div>
    )
}

export default OverviewComponent;

