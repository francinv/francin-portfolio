import React from "react";
import style from './Card.module.css';
import LanguagePercentageComponent from "./LanguagePercentageComponent";

const LanguageCard = () => {
    return (
        <div className={`${style.rounded_card} ${style.card_container} ${style.dark_card} ${style.flex_col}`}>
            <h3 className={`${style.card_title}`}>Most used languages</h3>
            <LanguagePercentageComponent language={'JavaScript'} percentage={'80.90%'} />
            <LanguagePercentageComponent language={'CSS'} percentage={'45.12%'} />
            <LanguagePercentageComponent language={'Java'} percentage={'62.33%'} />
            <LanguagePercentageComponent language={'TypeScript'} percentage={'22.33%'} />
            <LanguagePercentageComponent language={'HTML'} percentage={'12.28%'} />
        </div>
    )
}

export default LanguageCard;