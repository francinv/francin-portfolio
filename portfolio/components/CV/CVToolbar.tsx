import React, { FC } from "react";
import style from "./CV.module.css";
import layoutStyles from "../../styles/layout.module.css";
import paddingStyles from "../../styles/padding.module.css";
import colorStyles from "../../styles/colors.module.css";
import marginStyles from "../../styles/margin.module.css";
import ToolbarButtonSection from "../common/Toolbar/ToolbarButtonSection";
import DownloadIcon from "../Icons/DownloadIcon";

const CVToolbar: FC = () => {
    return (
        <div 
            className={`
                ${style.toolbar_container}
                ${layoutStyles.flex_row} 
                ${layoutStyles.items_center}
                ${paddingStyles.p_y_8}
            `}
        >
            <ToolbarButtonSection />
            <h4 className={`${colorStyles.text_white} ${marginStyles.ml_30}`}>CV.pdf</h4>
            <button className={`${style.btn_toolbar} ${marginStyles.ml_auto} ${marginStyles.mr_12}`}><DownloadIcon /></button>
        </div>
    )
}

export default CVToolbar;