import React, { FC } from "react";
import style from "./CV.module.css";
import layoutStyles from "../../styles/layout.module.css";
import paddingStyles from "../../styles/padding.module.css";
import colorStyles from "../../styles/colors.module.css";
import marginStyles from "../../styles/margin.module.css";
import buttonStyle from "../Button/Button.module.css";
import ToolbarButtonSection from "../common/Toolbar/ToolbarButtonSection";
import DownloadIcon from "../Icons/DownloadIcon";

const CVToolbar: FC = () => {
    return (
        <div 
            className={`
                ${style.toolbar_container}
                ${layoutStyles.flex_row} 
                ${layoutStyles.items_center}
                ${paddingStyles.py_8}
                ${colorStyles.text_white}
            `}
        >
            <ToolbarButtonSection />
            <h4 className={`${marginStyles.ml_30}`}>CV.pdf</h4>
            <a 
                className={`${buttonStyle.btn_custom} ${marginStyles.ml_auto} ${marginStyles.mr_12}`} 
                href={process.env.GOOGLE_DRIVE_URL} 
                target="_blank" 
                rel="noreferrer"
            >
                <DownloadIcon />
            </a>
        </div>
    )
}

export default CVToolbar;