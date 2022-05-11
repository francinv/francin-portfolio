import React, { FC, useContext, useEffect, useState } from "react";
import style from "./Terminal.module.css";
import marginStyles from "../../styles/margin.module.css";
import colorStyles from "../../styles/colors.module.css";
import commonStyles from "../../styles/common.module.css";
import layoutStyles from "../../styles/layout.module.css";
import { typeWriter } from "../../animations/typeWriter";
import { PortfolioContext } from "../../features/AppContext";

const TerminalContent: FC = () => {
    const [aboutVisible, setAboutVisible] = useState(false);
    const { terminalText, setTerminalTextFn } = useContext(PortfolioContext);
    const command = "cat aboutFrancin.json";

    useEffect(() => {
      typeWriter(command, setTerminalTextFn, terminalText, setAboutVisible);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const About = () => {
        return (
            <p className={`${colorStyles.text_white} ${marginStyles.mt_5} ${commonStyles.text_16} ${commonStyles.text_monaco}`}>
                {"{"}
                <br />
                    <span 
                        className={`
                            ${marginStyles.mx_5} 
                            ${marginStyles.ml_16} 
                            ${commonStyles.text_16} 
                            ${commonStyles.text_monaco}
                            ${layoutStyles.flex_col}`}
                        >
                            <span className={marginStyles.mx_2}>{"“name”: “Francin Vincent,”"}</span>
                            <span className={marginStyles.mx_2}>{"“age”: “23,”"}</span>
                            <span className={marginStyles.mx_2}>{"“education”: “Bachelor in Informatics (completing this summer)”,"}</span>
                            <span className={marginStyles.mx_2}>{"“languages”: “Java, Python, C, C#, JavaScript, TypeScript”,"}</span>
                            <span className={marginStyles.mx_2}>{"“frameworks”: “Django, React, React Native, ASP.NET, Redux”"}</span>
                    </span>
                {"}"}
            </p>
        );
    }

    return (
        <div className={`${style.terminal_content_container} ${marginStyles.my_auto} ${marginStyles.mt_12}`}>
            <p className={`${colorStyles.text_white} ${marginStyles.mb_5} ${commonStyles.text_16} ${commonStyles.text_monaco}`}>{terminalText}</p>
            {
                aboutVisible 
                ? <About />
                : null
            }
        </div>
    );
}

export default TerminalContent;