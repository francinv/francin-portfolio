import React, { FC } from "react";
import style from "./Terminal.module.css";
import layoutStyles from "../../styles/layout.module.css";
import paddingStyles from "../../styles/padding.module.css";
import ToolbarButtonSection from "../common/Toolbar/ToolbarButtonSection";

interface TerminalToolbarProps {
    handleShow: () => void;
    handleEnhance: () => void;
}
const TerminalToolbar: FC<TerminalToolbarProps> = ({handleEnhance, handleShow}) => {
    return (
        <div 
            className=
            {`
                ${style.toolbar_container} 
                ${layoutStyles.flex_row} 
                ${layoutStyles.items_center}
                ${paddingStyles.p_y_8}
            `}
        >
            <ToolbarButtonSection handleEnhance={handleEnhance} handleShow={handleShow} />
        </div>
    );
}

export default TerminalToolbar;