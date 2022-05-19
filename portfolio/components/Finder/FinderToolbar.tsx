import React, { FC, useContext, useEffect, useState } from "react";
import style from "./Finder.module.css";
import layoutStyles from "../../styles/layout.module.css";
import paddingStyles from "../../styles/padding.module.css";
import ToolbarButtonSection from "../common/Toolbar/ToolbarButtonSection";
import colorStyles from "../../styles/colors.module.css";
import marginStyles from "../../styles/margin.module.css";
import commonStyles from "../../styles/common.module.css";
import FinderButton from "../Button/FinderButton";
import SearchIcon from "../Icons/SearchIcon";
import { PortfolioContext } from "../../features/AppContext";

const FinderToolbar: FC = () => {
    const { setSearchValueFn, searchValue } = useContext(PortfolioContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchValueFn(event.target.value);
    }

    return (
        <div 
            className={`
                ${style.toolbar_container} 
                ${layoutStyles.flex_row} 
                ${layoutStyles.items_center} 
                ${paddingStyles.p_y_8}
            `}
        >
            <ToolbarButtonSection />
            <h4 className={`${colorStyles.text_white} ${marginStyles.ml_30}`}>My projects</h4>
            <div className={`${marginStyles.ml_auto} ${marginStyles.mr_60} ${style.view_btn}`}>
                <FinderButton index="galleryView" />
                <FinderButton index="symbolView" />
            </div>
            <form 
                className={`
                    ${layoutStyles.flex_row} 
                    ${style.form_control} 
                    ${layoutStyles.center_all}
                    ${commonStyles.rounded_8}
                    ${paddingStyles.pl_3}
                `}
            >
                <SearchIcon />
                <input type="text" placeholder={"Search for project or language"} value={searchValue} onChange={handleChange}/>
            </form>
        </div>
    );
}

export default FinderToolbar;