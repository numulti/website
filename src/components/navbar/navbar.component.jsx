import React, { useState, useEffect } from 'react';
import { useStaticQuery } from 'gatsby';
import { Container } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';

import { DynamicLink } from '../global';
import './navbar.styles.css';

const MenuIcon = () => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
    />
    <path
      fillRule="evenodd"
      d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
    />
  </svg>
);

const NavBar = ({ toggleBlur }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallScreenNavOpen, setIsSmallScreenNavOpen] = useState(false);
  const [isScrollTop, setIsScrollTop] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 959px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    setIsSmallScreen(mediaQuery.matches);
  };

  const handleScroll = () => {
    setIsScrollTop(window.pageYOffset === 0);
  };

  const toggleSmallScreenNav = () => {
    setIsSmallScreenNavOpen(!isSmallScreenNavOpen);
    toggleBlur();
  };

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
        className={!isScrollTop || isSmallScreenNavOpen ? 'navbar-header-styled' : ''}
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
              </nav>
            )}
            <button className="navbar-vegan-burger" onClick={toggleSmallScreenNav}>
              {!isSmallScreenNavOpen ? <MenuIcon /> : <CrossIcon />}
            </button>
          </div>
        </Container>
      </header>
      <CSSTransition
        in={isSmallScreen && isSmallScreenNavOpen}
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
        </nav>
      </CSSTransition>
    </>
  );
};

export default NavBar;
