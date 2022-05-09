import Image from "next/image";
import React from "react";
import { todayDateString } from "../../util/dateUtil";
import styles from './Header.module.css';

const HeaderComponent: React.FC = () => {
    const name = 'Francin Anoj Vincent';

    return (
        <header className={styles.container}>
            <Image
                src="/apple_logo.svg"
                alt="Apple logo"
                width={20}
                height={25}
            />
            <div className={styles.inner_container}>
                <p className={styles.text}>{name}</p>
                <p className={styles.text}>{todayDateString()}</p>
            </div>
        </header>
    );
}

export default HeaderComponent;