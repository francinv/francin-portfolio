import React, { FC, useContext } from "react";
import layoutStyles from "../../styles/layout.module.css";
import style from "./Finder.module.css";
import marginStyles from "../../styles/margin.module.css";
import paddingStyles from "../../styles/padding.module.css";
import { FolderIcon } from "../Icons/Folder";
import { PortfolioContext } from "../../features/AppContext";

const SymbolView: FC = () => {
    const { filteredRepositories, fullSizeModal } = useContext(PortfolioContext);

    /**
     * Helper method to determine if the modal is fullSize or not. 
     * The grid view will change based on this.
     * @returns string with styling classes based on if fullSizeModal is true or not.
     */
    const getClassesForSymbolContainer = () => {
        if (fullSizeModal) {
            return `${style.symbol_container} ${marginStyles.my_auto} ${paddingStyles.px_35} ${layoutStyles.justify_center} ${style.large_grid}`
        } else {
            return `${style.symbol_container} ${marginStyles.my_auto} ${paddingStyles.px_35} ${layoutStyles.justify_center} ${style.small_grid}`
        }
    }
    
    return (
        <div className={getClassesForSymbolContainer()}>
            {/* Map repositories and show them as symbols, by clicking a specific element the user will be redirected
            to the repository page. */}
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