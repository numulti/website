import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import { DynamicLink } from '../global';
import { MenuIcon, CrossIcon, SunIcon, MoonIcon } from '../../assets';
import { useIsSmallScreen } from '../../utils';
import './navbar.css';

const NavBar = ({ toggleBlur }) => {
  const [isSmallScreenNavOpen, setIsSmallScreenNavOpen] = useState(false);
  const [isScrollTop, setIsScrollTop] = useState(true);
  const isSmallScreen = useIsSmallScreen();

  const {
    allNavigationJson: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allNavigationJson {
          edges {
            node {
              label
              link
            }
          }
        }
      }
    `
  );

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
    toggleBlur();
  };

  const ThemeButton = () => {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          const icon = theme === 'light' ? <MoonIcon /> : <SunIcon />;
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
                {edges.map((navLink, i) => {
                  return (
                    <DynamicLink key={i} to={navLink.node.link}>
                      {navLink.node.label}
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
            {edges.map((navLink, i) => {
              return (
                <DynamicLink
                  key={i}
                  to={navLink.node.link}
                  onClick={() => toggleSmallScreenNav()}
                >
                  {navLink.node.label}
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
