import { ApolloQueryResult, useQuery } from "@apollo/client";
import React, { FC, useContext, useEffect } from "react";
import { PortfolioContext } from "../../features/AppContext";
import { client } from "../../services/apolloConfig";
import { FETCH_GITHUB_STATISTICS } from "../../services/dataQueries";
import colorStyles from '../../styles/colors.module.css';
import commonStyles from '../../styles/common.module.css';
import layoutStyles from '../../styles/layout.module.css';
import marginStyles from '../../styles/margin.module.css';
import paddingStyles from '../../styles/padding.module.css';
import { StatisticsRepoResponse } from "../../typings/responseTypes";
import { CommitIcon, ContributionIcon, IssueIcon, PRIcon, StarIcon } from "../Icons/GithubOverviewIcons";
import style from "./Card.module.css";
import OverviewComponent from "./OverviewComponent";

const GithubOverviewCard: FC = () => {
    const { githubStatistic, setGithubStatisticFn } = useContext(PortfolioContext);

    const fetchStatistics = async () => {
        const response: ApolloQueryResult<StatisticsRepoResponse> = await client.query({query: FETCH_GITHUB_STATISTICS});
        if (response) {
            let stars = 0;
            response.data.viewer.repositories.nodes.forEach(repo => {
                stars += repo.stargazers.totalCount;
            });
            setGithubStatisticFn({
                ...githubStatistic,
                status: 'success',
                stars: stars,
                commits: response.data.viewer.contributionsCollection.totalCommitContributions,
                prs: response.data.viewer.pullRequests.totalCount,
                issues: response.data.viewer.issues.totalCount,
                contributions: response.data.viewer.repositoriesContributedTo.totalCount,
            });
        }
    }
    useEffect(() => {
        if (githubStatistic.status === 'idle') {
            fetchStatistics();
        } 
    }, [githubStatistic]);
            
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
            <h3 className={`${marginStyles.m_0} ${marginStyles.mb_8}`}>GitHub Statistics</h3>
            <OverviewComponent Icon={StarIcon} title="Total stars: " value={githubStatistic.stars} />
            <OverviewComponent Icon={CommitIcon} title="Total commits: " value={githubStatistic.commits} />
            <OverviewComponent Icon={PRIcon} title="Total PRs: " value={githubStatistic.prs} />
            <OverviewComponent Icon={IssueIcon} title="Total Issues: " value={githubStatistic.issues} />
            <OverviewComponent Icon={ContributionIcon} title="Total Contributions: " value={githubStatistic.contributions} />
        </div>
    )
}

export default GithubOverviewCard;