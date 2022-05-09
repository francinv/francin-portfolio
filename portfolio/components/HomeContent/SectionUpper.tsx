import React from "react";
import { githubLink, linkedinLink } from "../../constants/links";
import LinkButton from "../Button/LinkButton";
import ProgramButton from "../Button/ProgramButton";
import style from './HomeContent.module.css';

const SectionUpper: React.FC = () => {

    return (
        <section className={style.container}>
            <ProgramButton handleClick={(event) => console.log(event)} text="Terminal" index="Terminal" />
            <div className={`${style.align_right} ${style.flex}`}>
                <LinkButton linkTo={githubLink} text="GitHub" /> 
                <LinkButton linkTo={linkedinLink} text="LinkedIn" />
            </div>
        </section>
    )
}

export default SectionUpper;