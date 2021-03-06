import React, { FC } from "react";
import style from "./CV.module.css";
import layoutStyle from "../../styles/layout.module.css";
import marginStyles from "../../styles/margin.module.css";

interface CompetenceProps {
    title: string;
    value: number;
    sizeOfArray: number;
}

/**
 * This component is used to show my knowledge for a specific language. 
 * @param title of the language and value from (0-5). 
 * @returns JSX.Element
 */
const Competence: FC<CompetenceProps> = ({ title, value }) => {

    /**
     * Function to create 5 circles based on the value passed in as props. 
     * @returns a list of classes.
     */
    const buildCircles = () => {
        const fullCircles = [];
        for (let i = 0; i < 5; i++) {
            let className = `${style.circle}`;
            if (i < value) {
                if (value % 1 === 0.5) {
                    if (i + 0.5 === value) {
                        className += ` ${style.circle_half}`;
                    } else {
                        className += ` ${style.circle_filled}`;
                    }
                } else {
                    className += ` ${style.circle_filled}`;
                }
            } else {
                className += ` ${style.circle_empty}`;
            }
            fullCircles.push({className: className});
        }
        return fullCircles;
    }

    return (
        <div className={`${layoutStyle.flex_row} ${marginStyles.mx_5} ${layoutStyle.justify_between}`}>
            <p className={marginStyles.m_0}>{title}</p>
            <div className={`${layoutStyle.flex_row}`}>
                {buildCircles().map((element, index) => (
                    <div key={index} className={element.className} />
                ))}
            </div>
        </div>
    )
}

export default Competence;
