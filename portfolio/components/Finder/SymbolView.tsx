import React, { FC, useContext } from "react";
import layoutStyles from "../../styles/layout.module.css";
import style from "./Finder.module.css";
import colorStyles from "../../styles/colors.module.css";
import marginStyles from "../../styles/margin.module.css";
import paddingStyles from "../../styles/padding.module.css";
import { FolderIcon } from "../Icons/Folder";
import { PortfolioContext } from "../../features/AppContext";

const SymbolView: FC = () => {
    const { filteredRepositories, fullSizeModal } = useContext(PortfolioContext);

    const getClassesForSymbolContainer = () => {
        if (fullSizeModal) {
            return `${style.symbol_container} ${marginStyles.my_auto} ${paddingStyles.px_35} ${layoutStyles.justify_center} ${style.symbol_container_full}`
        } else {
            return `${style.symbol_container} ${marginStyles.my_auto} ${paddingStyles.px_35} ${layoutStyles.justify_center} ${style.symbol_container_small}`
        }
    }
    
    return (
        <div className={getClassesForSymbolContainer()}>
            {
                filteredRepositories.map((repository, index) => (
                    <a 
                        key={index} 
                        className={`${layoutStyles.flex_col} ${layoutStyles.items_center}`}
                        href={repository.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FolderIcon height="55"/>
                        <p className={`
                            ${colorStyles.text_white} 
                            ${layoutStyles.text_center} 
                            ${marginStyles.mt_10}`
                        }
                        >{repository.name}</p>
                    </a>
                ))
            }
        </div>
    )
}

export default SymbolView;