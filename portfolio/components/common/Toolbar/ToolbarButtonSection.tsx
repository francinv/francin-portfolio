import React, { FC, useState } from "react";
import ToolbarButton from "../../Button/ToolbarButton";
import { CrossIcon, EnhanceIcon, MinusIcon } from "../../Icons/ToolbarIcons";
import layoutStyles from "../../../styles/layout.module.css";

interface ToolbarButtonSectionProps {
    handleShow: () => void;
    handleEnhance: () => void;
}
const ToolbarButtonSection: FC<ToolbarButtonSectionProps> = ({handleEnhance, handleShow}) => {
    const[iconVisible, setIconVisible] = useState(false);

    return (
        <div 
            className={`${layoutStyles.flex_row}`} 
            onMouseEnter={() => setIconVisible(true)}
            onMouseLeave={() => setIconVisible(false)}
        >
            <ToolbarButton 
                handleClick={handleShow}
                Icon={CrossIcon} 
                iconVisible={iconVisible}
            />
            <ToolbarButton
                handleClick={handleShow}
                Icon={MinusIcon}
                iconVisible={iconVisible}
            />
            <ToolbarButton
                handleClick={handleEnhance}
                Icon={EnhanceIcon}
                iconVisible={iconVisible}
            />
        </div>
    );
}

export default ToolbarButtonSection;