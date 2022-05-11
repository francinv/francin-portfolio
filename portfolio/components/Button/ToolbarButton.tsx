import React, { FC } from "react";
import style from "./Button.module.css";
import layoutStyles from "../../styles/layout.module.css";
import marginStyles from "../../styles/margin.module.css";
import { ToolbarIconProps } from "../Icons/ToolbarIcons";

interface ToolbarButtonProps {
    handleClick: () => void;
    Icon: FC<ToolbarIconProps>;
    iconVisible: boolean;
}

const ToolbarButton: FC<ToolbarButtonProps> = ({ handleClick, Icon, iconVisible}) => {
    return (
        <button 
            onClick={handleClick} 
            className={`${style.btn_toolbar} ${layoutStyles.flex_row} ${layoutStyles.align_all} ${marginStyles.my_5}`}
        >
            <Icon iconVisible={iconVisible} />
        </button>
        
    );
}

export default ToolbarButton;