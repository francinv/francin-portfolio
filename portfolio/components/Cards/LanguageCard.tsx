import React, { useEffect } from "react";
import style from './Card.module.css';
import LanguagePercentageComponent from "./LanguagePercentageComponent";
import marginStyles from '../../styles/margin.module.css';
import layoutStyles from '../../styles/layout.module.css';
import commonStyles from '../../styles/common.module.css';
import paddingStyles from '../../styles/padding.module.css';
import colorStyles from '../../styles/colors.module.css';
import { FETCH_LANGUAGES } from "../../services/dataQueries";
import { useQuery } from "@apollo/client";
import { LanguageEdge, LanguageNode, LanguageResponse } from "../../typings/responseTypes";
import { LanguageType } from "../../typings/commonTypes";
import { getPercentageFromNumber } from "../../util/getPercentage";

const LanguageCard = () => {

    const MostPopularLanguages = () => {
        const { loading, error, data } = useQuery<LanguageResponse>(FETCH_LANGUAGES);
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Went wrong</div>;

        let langArray: Array<LanguageType> = [];
        let totalSize:number = 0;
        if (data) {
            totalSize = data.viewer.repositories.nodes.reduce((acc, node) => acc + node.languages.totalSize, 0);
            data.viewer.repositories.nodes.forEach(node => {
                node.languages.edges.forEach(edge => {
                    const language = {
                        name: edge.node.name,
                        color: edge.node.color,
                        size: edge.size
                    };
                    langArray.push(language);
                });
            });
            const temporaryReducedArray = langArray.reduce( 
                function(acc: {[x: string]: LanguageType}, node) {
                    let langSize = node.size;

                    if (acc[node.name] && node.name === acc[node.name].name) {
                      langSize = node.size + acc[node.name].size;
                    }

                    return {
                      ...acc,
                      [node.name]: {
                        name: node.name,
                        color: node.color,
                        size: langSize,
                      },
                    };
            }, {});
            langArray = Object.values(temporaryReducedArray);
            langArray = langArray
                .sort((a, b) => b.size - a.size)
                .slice(0, 5);
        }
        return (
            <>
                <LanguagePercentageComponent
                    language={langArray[0].name}
                    color={langArray[0].color}
                    percentage={getPercentageFromNumber(langArray[0].size, totalSize)}
                />
                <LanguagePercentageComponent
                    language={langArray[1].name}
                    color={langArray[1].color}
                    percentage={getPercentageFromNumber(langArray[1].size, totalSize)}
                />
                <LanguagePercentageComponent
                    language={langArray[2].name}
                    color={langArray[2].color}
                    percentage={getPercentageFromNumber(langArray[2].size, totalSize)}
                />
                <LanguagePercentageComponent
                    language={langArray[3].name}
                    color={langArray[3].color} 
                    percentage={getPercentageFromNumber(langArray[3].size, totalSize)}
                />
                <LanguagePercentageComponent
                    language={langArray[4].name}
                    color={langArray[4].color}  
                    percentage={getPercentageFromNumber(langArray[4].size, totalSize)}
                />
            </>
        )
    }

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
            <MostPopularLanguages />
        </div>
    )
}

export default LanguageCard;