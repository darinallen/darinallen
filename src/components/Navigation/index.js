import React from 'react';

import styles from './navigation.module.scss';

class Navigation extends React.Component {
  state = {
    open: false,
    unclickable: true
  };

  toggleMenu = () => {
    const { open } = this.state;
    // Once the animation is complete (800ms), remove the z-index to make nav items unclickable
    if (open) {
      const _this = this;
      setTimeout(() => _this.setState({ unclickable: true }), 800);
    } else {
      this.setState({ unclickable: false });
    }
    this.setState({ open: !open });
  };

  render() {
    const { open, unclickable } = this.state;
    return (
      <div className={styles.navigation}>
        <div onClick={this.toggleMenu} className={`${styles.button} ${!open && styles.spread}`}>
          <span className={`${styles.icon} ${open && styles.iconOpen}`}>&nbsp;</span>
        </div>
        <div className={`${styles.background} ${open && styles.open} ${unclickable && styles.closed}`}>&nbsp;</div>
        <nav className={`${styles.nav} ${open && styles.visible} ${unclickable && styles.closed}`}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="#about" className={styles.link}>
                <span className={styles.linkNum}>01</span>About Darin
              </a>
            </li>
            <li className={styles.item}>
              <a href="#features" className={styles.link}>
                <span className={styles.linkNum}>02</span>Web development
              </a>
            </li>
            <li className={styles.item}>
              <a href="#services" className={styles.link}>
                <span className={styles.linkNum}>03</span>Consulting services
              </a>
            </li>
            <li className={styles.item}>
              <a href="#stories" className={styles.link}>
                <span className={styles.linkNum}>04</span>Stories
              </a>
            </li>
            <li className={styles.item}>
              <a href="#quote" className={styles.link}>
                <span className={styles.linkNum}>05</span>Get a quote
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
