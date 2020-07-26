import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import { DynamicLink } from '../global';
import {MenuIcon, CrossIcon} from '../../assets'
import { useIsSmallScreen } from '../../utils';
import './navbar.styles.css';

const NavBar = ({ toggleBlur }) => {
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
    setIsSmallScreenNavOpen(!isSmallScreenNavOpen);
    toggleBlur();
  };

  const ThemeButton = () => (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label>
          <input
            type="checkbox"
            onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />{' '}
          Dark mode
        </label>
      )}
    </ThemeToggler>
  );

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

  return (
    <>
      <header
        className={
          !isScrollTop || isSmallScreenNavOpen ? 'navbar-header-styled' : ''
        }
      >
        <Container fixed>
          <div className="navbar-header-layout">
            <div className="navbar-logo">(logo placeholder)</div>
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
            <button
              className="navbar-vegan-burger"
              onClick={toggleSmallScreenNav}
            >
              {!isSmallScreenNavOpen ? <MenuIcon /> : <CrossIcon />}
            </button>
          </div>
        </Container>
      </header>
      {isSmallScreen && (
        <CSSTransition
          in={isSmallScreenNavOpen}
          timeout={400}
          classNames="nav-navbar-transition"
          unmountOnExit
        >
          <nav>
            {edges.map((navLink, i) => {
              return (
                <DynamicLink
                  key={i}
                  to={navLink.node.link}
                  onClick={toggleSmallScreenNav}
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
