import React, { useContext, useEffect } from "react";
import style from './Card.module.css';
import LanguagePercentageComponent from "./LanguagePercentageComponent";
import marginStyles from '../../styles/margin.module.css';
import layoutStyles from '../../styles/layout.module.css';
import commonStyles from '../../styles/common.module.css';
import paddingStyles from '../../styles/padding.module.css';
import colorStyles from '../../styles/colors.module.css';
import { FETCH_LANGUAGES } from "../../services/dataQueries";
import { ApolloQueryResult } from "@apollo/client";
import { langResponse } from "../../typings/responseTypes";
import { getPercentageFromNumber } from "../../util/getPercentage";
import { client } from "../../services/apolloConfig";
import { PortfolioContext } from "../../features/AppContext";
import Loading from "../common/Loading/Loading";
import { langType } from "../../typings/languageTypes";

/**
 * LanguageCard is a card that show the user the most used languages by me.
 * I got this idea from: https://github.com/anuraghazra and this repo: https://github.com/anuraghazra/github-readme-stats. 
 * I have also looked at his work to determine the best way to fetch the data.
 * @returns JSX.Element
 */
const LanguageCard = () => {
    const { mostUsedLanguages, setMostUsedLanguagesFn } = useContext(PortfolioContext);

    useEffect(() => {

        // Function to fetch data from the GitHub GraphQL API.
        const fetchMostUsedLanguages = async () => {
            // Fetch data.
            const response: ApolloQueryResult<langResponse> = await client.query({query: FETCH_LANGUAGES});

            if (response) {
                let langArray: Array<langType> = [];

                //Push every element to langArray, instead of keeping the whole response.
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

                //Reducing the array by checking if the language is already in the array. If it is I will add the size.
                const temporaryReducedArray = langArray.reduce( 
                    function(acc: {[x: string]: langType}, node) {
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

                //Since the array is now turned into an Object I turn it back into an array.
                langArray = Object.values(temporaryReducedArray);

                //Sort the array by size and only keep the first 5 elements.
                langArray = langArray
                    .sort((a, b) => b.size - a.size)
                    .slice(0, 5);
    
                //Set the mostUsedLanguages global state.
                setMostUsedLanguagesFn({
                    status: 'success',
                    error: null,
                    languagesArray: langArray,
                });  
            }
        }

        if (mostUsedLanguages.status === 'idle') {
            fetchMostUsedLanguages();
        }
    }, [mostUsedLanguages, setMostUsedLanguagesFn]);

    

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
                //If the data is not completely fetched yet or the state is not set, show a loading animation.
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