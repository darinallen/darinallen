import React from 'react';

import styles from './navigation.module.scss';

class Navigation extends React.Component {
  state = {
    open: false,
    linksUnclickable: true
  };

  openMenu = () => {
    this.setState({ open: true, linksUnclickable: false });
  };

  closeMenu = () => {
    const _this = this;
    // Once the animation is complete (800ms), remove the z-index to make nav items unclickable
    setTimeout(() => {
      // Check if open to avoid setTimeout/setState issues when user clicks on icon in rapid succession
      if (!_this.state.open) _this.setState({ linksUnclickable: true });
    }, 800);
    this.setState({ open: false });
  };

  render() {
    const { beverage } = this.props;
    const { open, linksUnclickable } = this.state;
    return (
      <div className={styles.navigation}>
        <div onClick={open ? this.closeMenu : this.openMenu} className={`${styles.button} ${!open && styles.spread}`}>
          <span className={`${styles.icon} ${open && styles.iconOpen}`}>&nbsp;</span>
        </div>
        <div className={`${styles.background} ${open && styles.open} ${linksUnclickable && styles.coverLinks}`}>
          &nbsp;
        </div>
        <nav className={`${styles.nav} ${open && styles.visible} ${linksUnclickable && styles.coverLinks}`}>
          <ul className={styles.list}>
            <NavItem link="#about" num="01" closeMenu={this.closeMenu}>
              About me
            </NavItem>
            <NavItem link="#features" num="02" closeMenu={this.closeMenu}>
              Features
            </NavItem>
            <NavItem link="#services" num="03" closeMenu={this.closeMenu}>
              Consulting services
            </NavItem>
            <NavItem link="#stories" num="04" closeMenu={this.closeMenu}>
              Stories
            </NavItem>
            <NavItem link="#contact" num="05" closeMenu={this.closeMenu}>
              Discuss a project
            </NavItem>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;

const NavItem = ({ link, num, closeMenu, children }) => (
  <li className={styles.item} onClick={closeMenu}>
    <a href={link} className={styles.link}>
      <span className={styles.linkNum}>{num}</span>
      {children}
    </a>
  </li>
);
