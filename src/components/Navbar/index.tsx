import { MenuAlt4Icon, XIcon } from '@heroicons/react/outline';
import { styled } from '@stitches/react';
import React, { useState } from 'react';
import globalStyles from '../../globalStyles';
import { Button, ButtonProps } from '../Button';
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
  alignItems: 'center',
  background: 'white',
  zIndex: 999,
  width: '100%',

  '@media (max-width: 1100px)': {
    height: '64px',
  },

  '@media (prefers-color-scheme: dark)': {
    background: '#111',
    color: '#efefef'
  },
});

const NavbarWrapper = styled('div', {
  margin: '0 64px',
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '& .ctas a, & .ctas button': {
    marginLeft: '24px',
    '&:first-child': {
      marginLeft: '0'
    }
  },

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
  zIndex: 999,

  '@media (max-width: 1100px)': {
    display: 'flex',
  },
  '@media (prefers-color-scheme: dark)': {
    background: '#111'
  },
});

const MobileNavbarWrapper = styled('div', {
  display: 'none',
  height: 'calc(100vh - 64px)',
  position: 'fixed',
  top: '64px',
  width: '100vw',
  boxSizing: 'border-box',
  borderTop: '1px solid rgba(0, 0, 0, 0.18)',
  zIndex: 999,
  background: 'white',
  transition: 'opacity 0.15s',
  opacity: '0',

  '&.opened': {
    display: 'block',
    opacity: '1'
  },

  '& .ctas a > div, & .ctas button > div': {
    width: 'auto !important',
    margin: '0 auto'
  },

  '@media (max-width: 1100px)': {
    '&:not(.opened)': {
      display: 'none',
    }
  },

  '@media (prefers-color-scheme: dark)': {
    background: '#111',
    '& .ctas': {
      background: '#1e1e1e !important'
    }
  },
});

export const Navbar = ({ logo, leftLinks = [], rightLinks = [], ctas = [] }: NavbarProps) => {
  const [ isOpen, setIsOpen ] = useState(false);

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
            <div className="ctas" style={{ marginLeft: '24px', display: 'flex' }}>
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
      <MobileNavbarWrapper className={isOpen ? 'opened' : 'closed'}>
        <div className="links" style={{ display: 'flex', padding: '24px', flexDirection: 'column' }}>
          {links.map((v, i) => <TopLevelLink mobile id={`nav_toplevel_left-link-${i}`} {...v} />)}
        </div>

        <div className="ctas" style={{ display: 'flex', alignItems: 'center', boxSizing: 'border-box', padding: '0 24px', position: 'fixed', bottom: '0', height: '74px', backgroundColor: '#F8F8F8', width: '100%' }}>
          {ctas.map((v, i) => <Button id={`cta-mobile-${i}`} css={{ width: '100%' }} {...v} />)}
        </div>
      </MobileNavbarWrapper>
    </>
  );
}
