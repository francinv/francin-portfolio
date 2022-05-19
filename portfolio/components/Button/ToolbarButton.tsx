import React, { FC } from "react";
import style from "./Button.module.css";
import layoutStyles from "../../styles/layout.module.css";
import { ToolbarIconProps } from "../Icons/ToolbarIcons";

interface ToolbarButtonProps {
    handleClick: () => void;
    Icon: FC<ToolbarIconProps>;
    iconVisible: boolean;
}

/**
 * ToolbarButton is the buttons used in the Toolbar. The ToolbarButton consists of the different window options: 
 * - Close
 * - Minimize
 * - Maximize
 * @param handleClick, Icon, iconVisible props. handleClick is the function that will be called when the button is clicked. 
 * Icon is the icon that will be displayed on the button. iconVisible is a boolean that determines if the icon is visible or not.
 * @returns JSX.Element
 */
const ToolbarButton: FC<ToolbarButtonProps> = ({ handleClick, Icon, iconVisible}) => {
    
    return (
        <button 
            onClick={handleClick} 
            className={`
                ${style.btn_toolbar} 
                ${layoutStyles.flex_row} 
                ${layoutStyles.align_all} 
                ${style.btn_custom}
            `}
        >
            <Icon iconVisible={iconVisible} />
        </button>
    );
}

export default ToolbarButton;