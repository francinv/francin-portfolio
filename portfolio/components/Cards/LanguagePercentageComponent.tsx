import React, { FC } from "react";
import style from "./Card.module.css";
import languageColors from '../../assets/languageColors.json';
import layoutStyles from '../../styles/layout.module.css';
import marginStyles from '../../styles/margin.module.css';
import commonStyles from '../../styles/common.module.css';
import colorStyles from '../../styles/colors.module.css';

interface LanguagePercentageComponentProps {
    language: string;
    percentage: string;
}

const LanguagePercentageComponent: FC<LanguagePercentageComponentProps> = ({ language, percentage }) => {
    const color = languageColors[language as keyof typeof languageColors];

    return (
        <div className={`${layoutStyles.flex_col} ${style.hover_translateX}`}>
            <p className={`${marginStyles.mb_0} ${commonStyles.opacity_70}`}>{language}</p>
            <div className={`${layoutStyles.flex_row} ${layoutStyles.items_center}`}>
                <div className={`${style.outer_lang_container} ${colorStyles.bg_black_transparent} ${commonStyles.rounded_100} ${marginStyles.mr_16}`}>
                    <div className={`${style.inner_lang_container} ${commonStyles.rounded_100} `} style={{width: percentage, backgroundColor: color}}/>
                </div>
                <p className={`${commonStyles.opacity_70} ${style.hover_scale}`}>{percentage}</p>
            </div>
        </div>
    );
}

export default LanguagePercentageComponent;
