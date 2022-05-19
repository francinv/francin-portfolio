import React, { FC } from "react";
import styles from '../styles/Home.module.css';

/**
 * Wrapper component for the Home page.
 * @param children of the component.
 * @returns JSX.Element
 */
const Layout: FC = ({children}) => {

    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Layout;