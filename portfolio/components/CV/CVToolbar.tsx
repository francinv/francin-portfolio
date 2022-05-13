import React, { FC } from "react";
import style from "./CV.module.css";
import layoutStyles from "../../styles/layout.module.css";
import paddingStyles from "../../styles/padding.module.css";
import colorStyles from "../../styles/colors.module.css";
import marginStyles from "../../styles/margin.module.css";
import ToolbarButtonSection from "../common/Toolbar/ToolbarButtonSection";
import DownloadIcon from "../Icons/DownloadIcon";

const CVToolbar: FC = () => {
    const cvLink = "https://drive.google.com/file/d/1CJWntPF5KUn0AXq1DMIvTzNmCOB7A-6n/view?usp=sharing";
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
            <a 
                className={`${style.btn_toolbar} ${marginStyles.ml_auto} ${marginStyles.mr_12}`} 
                href={cvLink} 
                target="_blank" 
                rel="noreferrer"
            >
                <DownloadIcon />
            </a>
        </div>
    )
}

export default CVToolbar;