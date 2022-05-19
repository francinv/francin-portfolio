import React, { FC } from "react";
import ProgramButton from "../Button/ProgramButton";
import GithubOverviewCard from "../Cards/GithubOverviewCard";
import LanguageCard from "../Cards/LanguageCard";
import layoutStyles from '../../styles/layout.module.css';
import marginStyles from '../../styles/margin.module.css';


const SectionMain: FC = () => {
    return (
        <section 
            className=
                {`
                    ${layoutStyles.flex_row} 
                    ${layoutStyles.center_all} 
                    ${marginStyles.mt_32} 
                    ${marginStyles.mb_0} 
                    ${marginStyles.my_auto}
                `}
            style={{width: '97%'}}
        >
            <div 
                className={`${layoutStyles.flex_row} ${layoutStyles.center_all}`}
                style={{width: '100%'}}
            >
                <GithubOverviewCard />
                <>
                    <ProgramButton text='My projects' type="Projects" />
                    <ProgramButton text='CV.pdf' type="CV" />
                </>
                <LanguageCard />
            </div>
        </section>
    )
}

export default SectionMain;