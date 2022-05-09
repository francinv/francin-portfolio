import React from "react";
import ProgramButton from "../Button/ProgramButton";
import style from './HomeContent.module.css';

const SectionMain: React.FC = () => {
    return (
        <section className={`${style.container} ${style.align_content} ${style.justify_center} ${style.h400}`}>
            <div className={`${style.inner_container} ${style.justify_center}`}>
                <ProgramButton handleClick={(event) => console.log(event)} text='My projects' index="Projects"/>
                <ProgramButton handleClick={(event) => console.log(event)} text='CV.pdf' index="CV"/>
            </div>
        </section>
    )
}

export default SectionMain;