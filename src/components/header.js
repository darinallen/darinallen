import React from 'react';
import styles from './header.module.scss';

export default props => <h1 className={styles.header}>{props.headerText}</h1>;
