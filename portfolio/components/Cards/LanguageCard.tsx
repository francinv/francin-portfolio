import React from "react";
import style from './Card.module.css';
import LanguagePercentageComponent from "./LanguagePercentageComponent";
import marginStyles from '../../styles/margin.module.css';
import layoutStyles from '../../styles/layout.module.css';
import commonStyles from '../../styles/common.module.css';
import paddingStyles from '../../styles/padding.module.css';
import colorStyles from '../../styles/colors.module.css';

const LanguageCard = () => {
    return (
        <div className={`
                ${commonStyles.rounded_10} 
                ${paddingStyles.p_x_16} 
                ${paddingStyles.pr_32} 
                ${paddingStyles.pl_16} 
                ${colorStyles.text_white}
                ${colorStyles.bg_black_transparent}
                ${marginStyles.my_auto}
                ${marginStyles.mx_0}
                ${style.card_container} 
                ${layoutStyles.flex_col}
            `}
        >
            <h3 className={`${marginStyles.m_0} ${marginStyles.mb_8}`}>Most used languages</h3>
            <LanguagePercentageComponent language={'JavaScript'} percentage={'80.90%'} />
            <LanguagePercentageComponent language={'CSS'} percentage={'45.12%'} />
            <LanguagePercentageComponent language={'Java'} percentage={'62.33%'} />
            <LanguagePercentageComponent language={'TypeScript'} percentage={'22.33%'} />
            <LanguagePercentageComponent language={'HTML'} percentage={'12.28%'} />
        </div>
    )
}

export default LanguageCard;