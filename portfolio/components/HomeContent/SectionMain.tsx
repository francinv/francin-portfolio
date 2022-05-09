import React from "react";
import ProgramButton from "../Button/ProgramButton";
import GithubOverviewCard from "../Cards/GithubOverviewCard";
import LanguageCard from "../Cards/LanguageCard";
import style from './HomeContent.module.css';

const SectionMain: React.FC = () => {
    return (
        <section className={`${style.container} ${style.justify_center} ${style.h400}`}>
            <div className={`${style.inner_container} ${style.justify_center}`}>
                <GithubOverviewCard />
                <>
                    <ProgramButton handleClick={(event) => console.log(event)} text='My projects' index="Projects"/>
                    <ProgramButton handleClick={(event) => console.log(event)} text='CV.pdf' index="CV"/>
                </>
                <LanguageCard />
            </div>
        </section>
    )
}

export default SectionMain;