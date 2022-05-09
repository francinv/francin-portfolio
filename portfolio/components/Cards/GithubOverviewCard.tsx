import React, { FC } from "react";
import { CommitIcon, ContributionIcon, IssueIcon, PRIcon, StarIcon } from "../Icons/GithubOverviewIcons";
import style from "./Card.module.css";
import OverviewComponent from "./OverviewComponent";

const GithubOverviewCard: FC = () => {
    return (
        <div className={`${style.rounded_card} ${style.card_container} ${style.dark_card} ${style.flex_col}`}>
            <h3 className={`${style.card_title}`}>GitHub Statistics</h3>
            <OverviewComponent Icon={StarIcon} title="Total stars: " value={1234} />
            <OverviewComponent Icon={CommitIcon} title="Total commits: " value={10} />
            <OverviewComponent Icon={PRIcon} title="Total PRs: " value={2} />
            <OverviewComponent Icon={IssueIcon} title="Total Issues: " value={2} />
            <OverviewComponent Icon={ContributionIcon} title="Total Contributions: " value={1} />
        </div>
    )
}

export default GithubOverviewCard;