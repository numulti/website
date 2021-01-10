import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
// import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import DynamicLink from '../dynamic-link/dynamic-link';
import { MenuIcon, CrossIcon, SunIcon, MoonIcon } from '../../assets/icons';
import useIsSmallScreen from '../../utils/small-screen-hook';
import navigation from '../../data/navigation';
import './navbar.css';
import { Logo } from '../../assets/logos';

const NavBar = () => {
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
  };

  // const ThemeButton = () => {
  //   return (
  //     <ThemeToggler>
  //       {({ theme, toggleTheme }) => {
  //         const icon = theme === 'light' ? <SunIcon /> : <MoonIcon />;
  //         return (
  //           <button
  //             className="navbar-theme-btn"
  //             onClick={() => {
  //               const nextTheme = theme === 'light' ? 'dark' : 'light';
  //               toggleTheme(nextTheme);
  //             }}
  //           >
  //             {icon}
  //           </button>
  //         );
  //       }}
  //     </ThemeToggler>
  //   );
  // };

  return (
    <>
      <header
        className={`navbar ${
          !isScrollTop || (isSmallScreenNavOpen && isSmallScreen)
            ? 'navbar-styled'
            : ''
        }`}
      >
        <Container fixed>
          <div className="navbar-layout">
            <div className="navbar-header">
              <button
                className="navbar-header-burger"
                onClick={() => toggleSmallScreenNav()}
              >
                {!isSmallScreenNavOpen ? <MenuIcon /> : <CrossIcon />}
              </button>
              <div className="navbar-header-logo">
                <DynamicLink to="/">
                  <Logo />
                </DynamicLink>
              </div>
            </div>
            {(!isSmallScreen || isSmallScreenNavOpen) && (
              <nav>
                {navigation.map((navLink, i) => {
                  return (
                    <div
                      className="navbar-link"
                      key={i}
                      onClick={
                        isSmallScreenNavOpen
                          ? () => toggleSmallScreenNav()
                          : null
                      }
                    >
                      <DynamicLink to={navLink.link}>
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
      </header>
    </>
  );
};

export default NavBar;
