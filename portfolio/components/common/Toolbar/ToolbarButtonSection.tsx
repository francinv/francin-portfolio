import React, { FC, useContext, useState } from "react";
import ToolbarButton from "../../Button/ToolbarButton";
import { CrossIcon, EnhanceIcon, MinusIcon } from "../../Icons/ToolbarIcons";
import layoutStyles from "../../../styles/layout.module.css";
import { PortfolioContext } from "../../../features/AppContext";

/**
 * ToolbarButtonSection is a component that shows buttons that have functions for controlling the modal.
 * @returns JSX.Element
 */
const ToolbarButtonSection: FC = () => {
    const[iconVisible, setIconVisible] = useState(false);
    const { setModalShowFn, setFullSizeModalFn, fullSizeModal } = useContext(PortfolioContext);
    
    return (
        <div 
            className={`${layoutStyles.flex_row}`} 
            onMouseEnter={() => setIconVisible(true)}
            onMouseLeave={() => setIconVisible(false)}
        >
            <ToolbarButton 
                handleClick={() => setModalShowFn(false)}
                Icon={CrossIcon} 
                iconVisible={iconVisible}
            />
            <ToolbarButton
                handleClick={() => setModalShowFn(false)}
                Icon={MinusIcon}
                iconVisible={iconVisible}
            />
            <ToolbarButton
                handleClick={() => setFullSizeModalFn(!fullSizeModal)}
                Icon={EnhanceIcon}
                iconVisible={iconVisible}
            />
        </div>
    );
}

export default ToolbarButtonSection;