import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { todayDateString } from "../../util/dateUtil";
import colorStyles from '../../styles/colors.module.css';
import layoutStyles from '../../styles/layout.module.css';
import marginStyles from '../../styles/margin.module.css';
import commonStyles from '../../styles/common.module.css';

/**
 * Component for displaying a header toolbar. The toolbar consists of 
 * name and date in addition to an Apple logo.
 * @returns JSX.Element
 */
const HeaderComponent: FC = () => {
    // String of today's date.
    const [dateString, setDateString] = useState(todayDateString());

    useEffect(() => {
        // Update dateString every minute.
        const interval = setInterval(() => {
            setDateString(todayDateString());
        }, 1000);

        // Clear interval when component is unmounted.
        return () => clearInterval(interval);
    }, []);

    const name = 'Francin Anoj Vincent';
    const textStyles = `${commonStyles.text_14} ${marginStyles.mx_0} ${marginStyles.my_8}`;
    return (
        <header 
            className=
                {`
                    ${colorStyles.bg_black_transparent} 
                    ${layoutStyles.flex_row}
                    ${colorStyles.text_white}
                `}
            style={{width: '100%', padding: '7px 9px 7px 9px'}}
        >
            <Image
                src="/apple_logo.svg"
                alt="Apple logo"
                width={20}
                height={25}
            />
            <div 
            className=
                {`
                    ${layoutStyles.flex_row} 
                    ${layoutStyles.items_center}
                    ${marginStyles.ml_auto}
                `}
            >
                <p className={textStyles}>{name}</p>
                <p className={textStyles}>{dateString}</p>
            </div>
        </header>
    );
}

export default HeaderComponent;