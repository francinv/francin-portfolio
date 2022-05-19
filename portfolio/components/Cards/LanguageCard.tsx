import React, { useContext, useEffect } from "react";
import style from './Card.module.css';
import LanguagePercentageComponent from "./LanguagePercentageComponent";
import marginStyles from '../../styles/margin.module.css';
import layoutStyles from '../../styles/layout.module.css';
import commonStyles from '../../styles/common.module.css';
import paddingStyles from '../../styles/padding.module.css';
import colorStyles from '../../styles/colors.module.css';
import { FETCH_LANGUAGES } from "../../services/dataQueries";
import { ApolloQueryResult, useQuery } from "@apollo/client";
import { LanguageEdge, LanguageNode, LanguageResponse } from "../../typings/responseTypes";
import { LanguageType } from "../../typings/commonTypes";
import { getPercentageFromNumber } from "../../util/getPercentage";
import { client } from "../../services/apolloConfig";
import { PortfolioContext } from "../../features/AppContext";
import Loading from "../common/Loading/Loading";

const LanguageCard = () => {
    const { mostUsedLanguages, setMostUsedLanguagesFn } = useContext(PortfolioContext);

    useEffect(() => {
        if (mostUsedLanguages.status === 'idle') {
            fetchMostUsedLanguages();
        }
    }, [mostUsedLanguages]);

    const fetchMostUsedLanguages = async () => {
        const response: ApolloQueryResult<LanguageResponse> = await client.query({query: FETCH_LANGUAGES});
        if (response) {
            let langArray: Array<LanguageType> = [];
            response.data.viewer.repositories.nodes.forEach(node => {
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

            setMostUsedLanguagesFn({
                status: 'success',
                error: null,
                languagesArray: langArray,
            });  
        }
    }

    return (
        <div className={`
                ${commonStyles.rounded_10} 
                ${paddingStyles.px_16} 
                ${paddingStyles.pr_32} 
                ${paddingStyles.pl_16} 
                ${colorStyles.bg_black_transparent}
                ${marginStyles.my_auto}
                ${marginStyles.mx_0}
                ${style.card_container} 
                ${layoutStyles.flex_col}
                ${colorStyles.text_white}
            `}
        >
            <h3 className={`${marginStyles.m_0} ${marginStyles.mb_8}`}>Most used languages</h3>
            {
                mostUsedLanguages.languagesArray.length > 0 
                ?   mostUsedLanguages.languagesArray.map(language => (
                        <LanguagePercentageComponent
                            key={language.name}
                            language={language.name}
                            color={language.color}
                            percentage={getPercentageFromNumber(language.size, mostUsedLanguages.languagesArray.reduce((acc, node) => acc + node.size, 0))}
                        />
                    ))
                : <Loading />
            }
            
        </div>
    )
}

export default LanguageCard;