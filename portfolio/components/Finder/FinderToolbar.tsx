import React, { FC, useContext } from "react";
import style from "./Finder.module.css";
import layoutStyles from "../../styles/layout.module.css";
import paddingStyles from "../../styles/padding.module.css";
import ToolbarButtonSection from "../common/Toolbar/ToolbarButtonSection";
import colorStyles from "../../styles/colors.module.css";
import marginStyles from "../../styles/margin.module.css";
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
                ${paddingStyles.py_8}
                ${colorStyles.text_white}
            `}
        >
            <ToolbarButtonSection />
            <h4 className={`${marginStyles.ml_30}`}>My projects</h4>
            <div className={`${marginStyles.ml_auto} ${style.hover_container}`} style={{marginRight: '60px'}}>
                <FinderButton type="galleryView" />
                <FinderButton type="symbolView" />
            </div>
            <form 
                id="search_form"
                className={`
                    ${layoutStyles.flex_row} 
                    ${style.form_control} 
                    ${layoutStyles.center_all}
                `}
                style={{ borderRadius: '8px', paddingLeft: '3px'}}
            >
                <SearchIcon />
                <input id="search_field" type="text" placeholder="Search for project or language" value={searchValue} onChange={handleChange} autoFocus/>
            </form>
        </div>
    );
}

export default FinderToolbar;