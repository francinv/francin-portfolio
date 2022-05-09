import React, { Children } from "react";
import Image from "next/image";
import styles from '../styles/Home.module.css';

const Layout: React.FC = ({children}) => {

    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Layout;