import React, { FC, useContext, useState } from "react";
import style from "./Terminal.module.css";
import marginStyles from "../../styles/margin.module.css";
import colorStyles from "../../styles/colors.module.css";
import commonStyles from "../../styles/common.module.css";
import layoutStyles from "../../styles/layout.module.css";
import { PortfolioContext } from "../../features/AppContext";

/**
 * Content of the terminal window.
 * @returns JSX.Element
 */
const TerminalContent: FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { fullSizeModal } = useContext(PortfolioContext);
    const command = "(base) francinvincent@Francins-MBP ~ % cat aboutFrancin.json";

    interface AboutProps {
        isVisible: boolean;
    }

    /**
     * Display information about me. This component should be displayed after typewriter animation.
     * @param isVisible to determine if this component should be visible or not.
     * @returns JSX.Element or null
     */
    const About: FC<AboutProps> = ({isVisible}) => {
        if (isVisible) {
            return (
                <p 
                    className={`
                        ${marginStyles.mt_5} 
                        ${commonStyles.text_16} 
                        ${commonStyles.text_monaco}`}>
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
            )
        } else {
            return null;
        }
    }

    return (
        <div 
            className={`
                ${style.terminal_content_container} 
                ${marginStyles.my_auto} 
                ${colorStyles.text_white}`}>
            <p 
                className={`
                    ${commonStyles.text_16} 
                    ${commonStyles.text_monaco} 
                    ${fullSizeModal ? "full_screen_animation" : "minor_screen_animation" } 
                `}
                onAnimationStart={() => setIsVisible(false)}
                onAnimationEnd={() => setIsVisible(true)}
                style={{marginBottom: '5px'}}>{command}</p>
            <About isVisible={isVisible} />
        </div>
    );
}

export default TerminalContent;