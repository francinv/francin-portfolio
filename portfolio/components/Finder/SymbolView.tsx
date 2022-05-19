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
            return `${style.symbol_container} ${marginStyles.my_auto} ${paddingStyles.px_35} ${layoutStyles.justify_center} ${style.large_grid}`
        } else {
            return `${style.symbol_container} ${marginStyles.my_auto} ${paddingStyles.px_35} ${layoutStyles.justify_center} ${style.small_grid}`
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
                        <FolderIcon height="60"/>
                        <p className={layoutStyles.text_center} style={{marginTop: '10px'}}>{repository.name}</p>
                    </a>
                ))
            }
        </div>
    )
}

export default SymbolView;