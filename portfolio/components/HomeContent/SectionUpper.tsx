import React from "react";
import { githubLink, linkedinLink } from "../../constants/links";
import LinkButton from "../Button/LinkButton";
import ProgramButton from "../Button/ProgramButton";
import layoutStyles from '../../styles/layout.module.css';
import marginStyles from '../../styles/margin.module.css';

const SectionUpper: React.FC = () => {

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
            <ProgramButton handleClick={(event) => console.log(event)} text="Terminal" index="Terminal" />
            <div className={`${marginStyles.ml_auto} ${layoutStyles.flex_row}`}>
                <LinkButton linkTo={githubLink} text="GitHub" /> 
                <LinkButton linkTo={linkedinLink} text="LinkedIn" />
            </div>
        </section>
    )
}

export default SectionUpper;