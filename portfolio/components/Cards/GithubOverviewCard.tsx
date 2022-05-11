import React, { FC } from "react";
import { CommitIcon, ContributionIcon, IssueIcon, PRIcon, StarIcon } from "../Icons/GithubOverviewIcons";
import style from "./Card.module.css";
import OverviewComponent from "./OverviewComponent";
import commonStyles from '../../styles/common.module.css';
import paddingStyles from '../../styles/padding.module.css';
import colorStyles from '../../styles/colors.module.css';
import marginStyles from '../../styles/margin.module.css';
import layoutStyles from '../../styles/layout.module.css';

const GithubOverviewCard: FC = () => {
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
            <OverviewComponent Icon={StarIcon} title="Total stars: " value={1234} />
            <OverviewComponent Icon={CommitIcon} title="Total commits: " value={10} />
            <OverviewComponent Icon={PRIcon} title="Total PRs: " value={2} />
            <OverviewComponent Icon={IssueIcon} title="Total Issues: " value={2} />
            <OverviewComponent Icon={ContributionIcon} title="Total Contributions: " value={1} />
        </div>
    )
}

export default GithubOverviewCard;