import Image from "next/image";
import React from "react";
import { todayDateString } from "../../util/dateUtil";
import paddingStyles from '../../styles/padding.module.css';
import colorStyles from '../../styles/colors.module.css';
import layoutStyles from '../../styles/layout.module.css';
import marginStyles from '../../styles/margin.module.css';
import commonStyles from '../../styles/common.module.css';

const HeaderComponent: React.FC = () => {
    const name = 'Francin Anoj Vincent';
    const textStyles = `${commonStyles.text_14} ${marginStyles.mx_0} ${marginStyles.my_8}`;
    return (
        <header 
            className=
                {`
                    ${paddingStyles.px_7} 
                    ${paddingStyles.py_9} 
                    ${colorStyles.bg_black_transparent} 
                    ${layoutStyles.flex_row}
                `}
            style={{width: '100%'}}
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
                    ${colorStyles.text_white} 
                    ${marginStyles.ml_auto}
                `}
            >
                <p className={textStyles}>{name}</p>
                <p className={textStyles}>{todayDateString()}</p>
            </div>
        </header>
    );
}

export default HeaderComponent;