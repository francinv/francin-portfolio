import React, { FC } from "react";
import style from "./Card.module.css";
import layoutStyles from '../../styles/layout.module.css';
import marginStyles from '../../styles/margin.module.css';
import commonStyles from '../../styles/common.module.css';
import colorStyles from '../../styles/colors.module.css';

interface LanguagePercentageComponentProps {
    language: string;
    percentage: string;
    color: string;
}

/**
 * LanguagePercentageComponent is a component that shows the percentage of a specific language.
 * Based on the percentage it will show a colored bar.
 * @param language, the name of the language. percentage of the language and color of the language. 
 * @returns JSX.Element
 */
const LanguagePercentageComponent: FC<LanguagePercentageComponentProps> = ({ language, percentage, color }) => {

    return (
        <div className={`${layoutStyles.flex_col} ${style.hover_translateX}`}>
            <p className={`${marginStyles.mb_0} ${commonStyles.opacity_70}`}>{language}</p>
            <div className={`${layoutStyles.flex_row} ${layoutStyles.items_center}`}>
                <div className={`${style.outer_lang_container} ${colorStyles.bg_black_transparent} ${commonStyles.rounded_100}`}>
                    <div className={`${style.inner_lang_container} ${commonStyles.rounded_100} `} style={{width: percentage, backgroundColor: color}}/>
                </div>
                <p className={`${commonStyles.opacity_70} ${style.hover_scale}`}>{percentage}</p>
            </div>
        </div>
    );
}

export default LanguagePercentageComponent;
