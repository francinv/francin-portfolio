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

/**
 * OverviewComponent is a component that shows every statistics. 
 * @param title is the title of the element. value is the value of the statistic and Icon is the icon that matches the title.
 * @returns JSX.Element
 */
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

