import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import DynamicLink from '../dynamic-link/dynamic-link';
import { MenuIcon, CrossIcon, SunIcon, MoonIcon } from '../../assets/icons';
import useIsSmallScreen from '../../utils/small-screen-hook';
import navigation from '../../data/navigation';
import './navbar.css';
import { Logo } from '../../assets/logos';

const NavBar = ({}) => {
  const [isSmallScreenNavOpen, setIsSmallScreenNavOpen] = useState(false);
  const isSmallScreen = useIsSmallScreen();

  const toggleSmallScreenNav = () => {
    setIsSmallScreenNavOpen((prevState) => !prevState);
  };

  const ThemeButton = () => {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          const icon = theme === 'light' ? <SunIcon /> : <MoonIcon />;
          return (
            <button
              className="navbar-theme-btn"
              onClick={() => {
                const nextTheme = theme === 'light' ? 'dark' : 'light';
                toggleTheme(nextTheme);
              }}
            >
              {icon}
            </button>
          );
        }}
      </ThemeToggler>
    );
  };

  return (
    <>
      <header className="navbar-header">
        <Container fixed>
          <div className="navbar-header-layout">
            <div className="burger-logo">
              <button
                className="navbar-vegan-burger"
                onClick={() => toggleSmallScreenNav()}
              >
                {!isSmallScreenNavOpen ? <MenuIcon /> : <CrossIcon />}
              </button>
              <div className="navbar-logo">
                <Logo />
              </div>
            </div>
            {(!isSmallScreen || isSmallScreenNavOpen) && (
              <nav>
                {navigation.map((navLink, i) => {
                  return (
                    <div className="header-link">
                      <DynamicLink key={i} to={navLink.link}>
                        {navLink.label}
                      </DynamicLink>
                    </div>
                  );
                })}

                {/* <ThemeButton /> */}
              </nav>
            )}
          </div>
        </Container>
        <div className="header-background" />
      </header>
    </>
  );
};

export default NavBar;
