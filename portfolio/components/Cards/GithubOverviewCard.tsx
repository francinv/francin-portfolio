import { useQuery } from "@apollo/client";
import React, { FC } from "react";
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

    const GithubData = () => {
        const {loading, error, data} = useQuery<StatisticsRepoResponse>(FETCH_GITHUB_STATISTICS);
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        let statistics = {
            stars: 0,
            commits: 0,
            prs: 0,
            issues: 0,
            contributions: 0
        }

        if (data) {
            statistics.commits = data.viewer.contributionsCollection.totalCommitContributions;
            statistics.prs = data.viewer.pullRequests.totalCount;
            statistics.issues = data.viewer.issues.totalCount;
            statistics.contributions = data.viewer.repositoriesContributedTo.totalCount;
        
            data.viewer.repositories.nodes.forEach(element => {
                statistics.stars += element.stargazers.totalCount;
            });
        }

        return (
            <>
                <OverviewComponent Icon={StarIcon} title="Total stars: " value={statistics.stars} />
                <OverviewComponent Icon={CommitIcon} title="Total commits: " value={statistics.commits} />
                <OverviewComponent Icon={PRIcon} title="Total PRs: " value={statistics.prs} />
                <OverviewComponent Icon={IssueIcon} title="Total Issues: " value={statistics.issues} />
                <OverviewComponent Icon={ContributionIcon} title="Total Contributions: " value={statistics.contributions} />
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
            <h3 className={`${marginStyles.m_0} ${marginStyles.mb_8}`}>GitHub Statistics</h3>
            <GithubData />
        </div>
    )
}

export default GithubOverviewCard;