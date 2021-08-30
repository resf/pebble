import { MenuAlt4Icon, XIcon } from '@heroicons/react/outline';
import { styled } from '@stitches/react';
import React, { useState } from 'react';
import globalStyles from '../../globalStyles';
import Button, { ButtonProps } from '../Button/Button';
import TopLevelLink, { TopLevelLinkProps } from './TopLevelLink';

export interface NavbarProps {
  logo?: JSX.Element;
  leftLinks: TopLevelLinkProps[];
  rightLinks: TopLevelLinkProps[];
  ctas: ButtonProps[];
};

const NavbarParent = styled('div', {
  height: '74px',
  display: 'flex',
  alignItems: 'center'
});

const NavbarWrapper = styled('div', {
  margin: '0 64px',
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '& > *': {
    display: 'flex',
    alignItems: 'center'
  },

  '& .left .logo': {
    marginRight: '24px'
  },

  '@media (max-width: 1100px)': {
    display: 'none'
  }
});

const MobileNavbarTop = styled('div', {
  display: 'none',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  margin: '0 24px',

  '@media (max-width: 1100px)': {
    display: 'flex',
  }
});

const MobileNavbarWrapper = styled('div', {
  display: 'none',
  height: 'calc(100vh - 74px)',
  position: 'fixed',
  top: '74px',
  width: '100vw',
  boxSizing: 'border-box',
  borderTop: '1px solid rgba(0, 0, 0, 0.18)',

  '@media (max-width: 1100px)': {
    display: 'block',
  }
});

export default ({ logo, leftLinks = [], rightLinks = [], ctas = [] }: NavbarProps) => {
  const [ isOpen, setIsOpen ] = useState(false);

  globalStyles();

  const links = [ ...leftLinks, ...rightLinks ];

  return (
    <>
      <NavbarParent>
        <NavbarWrapper>
          <div className="left">
            { 
              logo ? (
                <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                  {logo}
                </div>
              ) : null
            }
            <div className="links">
              {leftLinks.map((v, i) => <TopLevelLink id={`nav_toplevel_left-link-${i}`} {...v} />)}
            </div>
          </div>

          <div className="right">
            <div className="links">
              {rightLinks.map((v, i) => <TopLevelLink id={`nav_toplevel_right-link-${i}`} {...v} />)}
            </div>
            <div className="ctas" style={{ marginLeft: '24px' }}>
              {ctas.map((v, i) => (<Button id={`cta-${i}`} {...v} />))}
            </div>
          </div>
        </NavbarWrapper>
        <MobileNavbarTop>
          <div className="nav">
            {
              logo ? (
                <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                  {logo}
                </div>
              ) : null
            }
          </div>
          <button onClick={() => setIsOpen(!isOpen)} style={{ padding: '0', background: 'none', border: 'none', height: '31px', width: '31px' }}>
            {!isOpen ? <MenuAlt4Icon /> : <XIcon />}
          </button>
        </MobileNavbarTop>
      </NavbarParent>
      {isOpen ? (
        <MobileNavbarWrapper>
          <div className="links" style={{ display: 'flex', padding: '24px', flexDirection: 'column' }}>
            {links.map((v, i) => <TopLevelLink mobile id={`nav_toplevel_left-link-${i}`} {...v} />)}
          </div>

          <div className="ctas" style={{ display: 'flex', alignItems: 'center', boxSizing: 'border-box', padding: '0 24px', position: 'fixed', bottom: '0', height: '74px', backgroundColor: '#F8F8F8', width: '100%' }}>
            {ctas.map((v, i) => <Button id={`cta-mobile-${i}`} css={{ width: '100%' }} {...v} />)}
          </div>
        </MobileNavbarWrapper>
      ) : null }
    </>
  );
}
