import React, { FC, useContext } from "react";
import { PortfolioContext } from "../../features/AppContext";
import { GalleryIcon, SymbolIcon } from "../Icons/FinderIcons";
import style from "./Button.module.css";

interface FinderButtonProps {
    index: string;
}
const FinderButton: FC<FinderButtonProps> = ({index}) => {
    const { viewType, setViewTypeFn } = useContext(PortfolioContext);

    const getIcon = () => {
        switch (index) {
            case "galleryView":
                return <GalleryIcon />;
            case "symbolView":
                return <SymbolIcon />;
            default:
                break;
        }
    }

    const handleClick = () => {
        setViewTypeFn(index);
    }

    return (
        <button 
            onClick={handleClick} 
            className={
                viewType === index 
                ? `${style.btn_selected} ${style.btn_custom}` 
                : `${style.btn_custom}`
            }
        >
            {getIcon()}
        </button>
    );
}

export default FinderButton;