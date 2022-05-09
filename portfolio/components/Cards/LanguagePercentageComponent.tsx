import React, { FC } from "react";
import style from "./Card.module.css";
import languageColors from '../../assets/languageColors.json';

interface LanguagePercentageComponentProps {
    language: string;
    percentage: string;
}

const LanguagePercentageComponent: FC<LanguagePercentageComponentProps> = ({ language, percentage }) => {
    const color = languageColors[language as keyof typeof languageColors];
    console.log(color);
    return (
        <div className={`${style.flex_col} ${style.hover_translateX}`}>
            <p style={{marginBottom: 0, opacity: 0.7}}>{language}</p>
            <div className={`${style.flex_row}`}>
                <div className={`${style.outer_percentage}`}>
                    <div className={`${style.inner_percentage}`} style={{width: percentage, backgroundColor: color}}/>
                </div>
                <p style={{opacity: 0.7}} className={`${style.hover_scale}`}>{percentage}</p>
            </div>
        </div>
    );
}

export default LanguagePercentageComponent;
