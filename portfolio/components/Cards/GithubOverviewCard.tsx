import { ApolloQueryResult } from "@apollo/client";
import React, { FC, useContext, useEffect } from "react";
import { PortfolioContext } from "../../features/AppContext";
import { client } from "../../services/apolloConfig";
import { FETCH_GITHUB_STATISTICS } from "../../services/dataQueries";
import colorStyles from '../../styles/colors.module.css';
import commonStyles from '../../styles/common.module.css';
import layoutStyles from '../../styles/layout.module.css';
import marginStyles from '../../styles/margin.module.css';
import paddingStyles from '../../styles/padding.module.css';
import { statResponse } from "../../typings/responseTypes";
import Loading from "../common/Loading/Loading";
import { CommitIcon, ContributionIcon, IssueIcon, PRIcon, StarIcon } from "../Icons/GithubOverviewIcons";
import style from "./Card.module.css";
import OverviewComponent from "./OverviewComponent";

/**
 * GithubOverviewCard shows the user some statistics for my GitHub activity. 
 * I got this idea from: https://github.com/anuraghazra and this repo: https://github.com/anuraghazra/github-readme-stats. 
 * I have also looked at his work to determine the best way to fetch the data.
 * @returns JSX.Element
 */
const GithubOverviewCard: FC = () => {
    const { githubStatistic, setGithubStatisticFn } = useContext(PortfolioContext);

    
    useEffect(() => {
        /**
         * Function to fetch data from the GitHub GraphQL API.
         */
        const fetchStatistics = async () => {
            // Fetch data.
            const response: ApolloQueryResult<statResponse> = await client.query({query: FETCH_GITHUB_STATISTICS});
            if (response) {
                let stars = 0;

                //Count stars by iterating through all the repositories.
                response.data.viewer.repositories.nodes.forEach(repo => {
                    stars += repo.stargazers.totalCount;
                });

                //Set global state with fetched data.
                setGithubStatisticFn({
                    ...githubStatistic,
                    status: 'success',
                    statistics: {
                        stars: stars,
                        commits: response.data.viewer.contributionsCollection.totalCommitContributions,
                        prs: response.data.viewer.pullRequests.totalCount,
                        issues: response.data.viewer.issues.totalCount,
                        contributions: response.data.viewer.repositoriesContributedTo.totalCount,
                    }
                });
            }
        }

        //To prevent unneccessary re-renders, check if the data is already fetched.
        if (githubStatistic.status === 'idle') {
            fetchStatistics();
        } 
        
    }, [githubStatistic, setGithubStatisticFn]);
            
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
            <h3 className={`${marginStyles.m_0} ${marginStyles.mb_8}`}>GitHub Statistics</h3>
            {
                //Conditional rendering, if the data is not fetched yet, show loading animation.
                githubStatistic.statistics
                ?   <>
                        <OverviewComponent Icon={StarIcon} title="Total stars: " value={githubStatistic.statistics.stars} />
                        <OverviewComponent Icon={CommitIcon} title="Total commits: " value={githubStatistic.statistics.commits} />
                        <OverviewComponent Icon={PRIcon} title="Total PRs: " value={githubStatistic.statistics.prs} />
                        <OverviewComponent Icon={IssueIcon} title="Total Issues: " value={githubStatistic.statistics.issues} />
                        <OverviewComponent Icon={ContributionIcon} title="Total Contributions: " value={githubStatistic.statistics.contributions} />
                    </>
                : <Loading />
            }
        </div>
    )
}

export default GithubOverviewCard;