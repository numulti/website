import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import DynamicLink from '../dynamic-link/dynamic-link';
import { MenuIcon, CrossIcon, SunIcon, MoonIcon } from '../../assets/icons';
import useIsSmallScreen from '../../utils/small-screen-hook';
import navigation from '../../data/navigation';
import './navbar.css';

const NavBar = ({ toggleBackgroundBlur }) => {
  const [isSmallScreenNavOpen, setIsSmallScreenNavOpen] = useState(false);
  const [isScrollTop, setIsScrollTop] = useState(true);
  const isSmallScreen = useIsSmallScreen();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setIsScrollTop(window.pageYOffset === 0);
  };

  const toggleSmallScreenNav = () => {
    setIsSmallScreenNavOpen((prevState) => !prevState);
    toggleBackgroundBlur();
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
      <header
        className={
          !isScrollTop || isSmallScreenNavOpen ? 'navbar-header-styled' : ''
        }
      >
        <Container fixed>
          <div className="navbar-header-layout">
            <button
              className="navbar-vegan-burger"
              onClick={() => toggleSmallScreenNav()}
            >
              {!isSmallScreenNavOpen ? <MenuIcon /> : <CrossIcon />}
            </button>
            <div className="navbar-logo">
              <p>logo</p>
            </div>
            {!isSmallScreen && (
              <nav>
                {navigation.map((navLink, i) => {
                  return (
                    <DynamicLink key={i} to={navLink.link}>
                      {navLink.label}
                    </DynamicLink>
                  );
                })}
                <ThemeButton />
              </nav>
            )}
          </div>
        </Container>
      </header>
      {isSmallScreen && (
        <CSSTransition
          in={isSmallScreenNavOpen}
          timeout={400}
          classNames="navbar-nav-transition"
          unmountOnExit
        >
          <nav>
            {navigation.map((navLink, i) => {
              return (
                <DynamicLink
                  key={i}
                  to={navLink.link}
                  onClick={() => toggleSmallScreenNav()}
                >
                  {navLink.label}
                </DynamicLink>
              );
            })}
            <ThemeButton />
          </nav>
        </CSSTransition>
      )}
    </>
  );
};

export default NavBar;
