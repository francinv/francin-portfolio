import React, { FC } from "react";
import style from "./Card.module.css";
import layoutStyles from "../../styles/layout.module.css";
import marginStyles from "../../styles/margin.module.css";
import commonStyles from "../../styles/common.module.css";

interface OverviewComponentProps {
    title: string;
    value: number;
    Icon: FC;
}

const OverviewComponent: FC<OverviewComponentProps> = ({ title, value, Icon }) => {
    return (
        <div className={`${layoutStyles.flex_row} ${layoutStyles.items_center} ${style.hover_translateX}`}>
            <Icon />
            <p className={`${commonStyles.opacity_80} ${marginStyles.ml_16} ${marginStyles.mr_12}`}>{title}</p>
            <p className={`${commonStyles.opacity_80} ${marginStyles.ml_auto} ${style.hover_scale}`}>{value}</p>
        </div>
    )
}

export default OverviewComponent;

