import React, { FC, useContext } from "react";
import { PortfolioContext } from "../../features/AppContext";
import { GalleryIcon, SymbolIcon } from "../Icons/FinderIcons";
import style from "./Button.module.css";

interface FinderButtonProps {
    type: string;
}

/**
 * This is a component for a button that the user can click to change the layout 
 * in the Finder window.
 * @param type of button, either "Gallery" or "Symbol"  
 * @returns 
 */
const FinderButton: FC<FinderButtonProps> = ({ type }) => {
    const { viewType, setViewTypeFn } = useContext(PortfolioContext);

    /**
     * Return correct Icon based on what type of button is wanted.
     * @returns JSX.Element of Icon
     */
    const getIcon = () => {
        switch (type) {
            case "galleryView":
                return <GalleryIcon />;
            case "symbolView":
                return <SymbolIcon />;
            default:
                break;
        }
    }

    /**
     * When the button is clicked, change the view type in the context.
     */
    const handleClick = () => {
        setViewTypeFn(type);
    }

    return (
        <button 
            onClick={handleClick} 
            className={
                viewType === type 
                ? `${style.btn_selected} ${style.btn_custom}` 
                : `${style.btn_custom}`
            }
        >
            {getIcon()}
        </button>
    );
}

export default FinderButton;