import React, { FC } from "react";
import { RepositoryType } from "../../typings/commonTypes";
import layoutStyles from "../../styles/layout.module.css";
import style from "./Finder.module.css";
import colorStyles from "../../styles/colors.module.css";
import marginStyles from "../../styles/margin.module.css";
import paddingStyles from "../../styles/padding.module.css";
import { FolderIcon } from "../Icons/Folder";

interface SymbolViewProps {
    repositories: Array<RepositoryType>;
}

const SymbolView: FC<SymbolViewProps> = ({ repositories }) => {
    return (
        <div className={`${style.symbol_container} ${marginStyles.my_auto} ${paddingStyles.px_35} `}>
            {
                repositories.map((repository, index) => (
                    <a 
                        key={index} 
                        className={`${layoutStyles.flex_col} ${layoutStyles.items_center}`}
                        href={repository.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FolderIcon />
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