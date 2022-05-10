import React, { FC, useState } from "react";
import style from "./Terminal.module.css";
import marginStyles from "../../styles/margin.module.css";
import colorStyles from "../../styles/colors.module.css";
import commonStyles from "../../styles/common.module.css";

const TerminalContent: FC = () => {
    const [aboutVisible, setAboutVisible] = useState(true);
    const command = "cat aboutFrancin.json";
    const terminal = "(base) francinvincent@Francins-MBP ~ % ";

    const About = () => {
        return (
            <p className={`${colorStyles.text_white} ${marginStyles.mt_5} ${commonStyles.text_16} ${commonStyles.text_monaco}`}>
                {"{"}
                    <p 
                        className={`${marginStyles.mx_5} ${marginStyles.ml_16} ${commonStyles.text_16} ${commonStyles.text_monaco}`}
                        style={{lineHeight: 1.5}}>
                        {"“name”: “Francin Vincent,”"}
                        <br />
                        {"“age”: “23,”"}
                        <br />
                        {"“education”: “Bachelor in Informatics (completing this summer)”,"}
                        <br />
                        {"“languages”: “Java, Python, C, C#, JavaScript, TypeScript”,"}
                        <br />
                        {"“frameworks”: “Django, React, React Native, ASP.NET, Redux”"}
                    </p>
                {"}"}
            </p>
        );
    }

    return (
        <div className={`${style.terminal_content_container} ${marginStyles.my_auto} ${marginStyles.mt_12}`}>
            <p className={`${colorStyles.text_white} ${marginStyles.mb_5} ${commonStyles.text_16} ${commonStyles.text_monaco}`}>{terminal}</p>
            {
                aboutVisible 
                ? <About />
                : null
            }
        </div>
    );
}

export default TerminalContent;