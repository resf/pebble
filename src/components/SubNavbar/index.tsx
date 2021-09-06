import { ChevronDownIcon } from '@heroicons/react/outline';
import { styled } from '@stitches/react';
import React, { useState } from 'react';
import globalStyles from '../../globalStyles';
import { Button, ButtonProps } from '../Button';
import { Link, LinkProps } from './Link';

export interface SubNavbarProps {
  logo?: JSX.Element;
  links?: LinkProps[];
  rightLinks?: LinkProps[];
  ctas?: ButtonProps[];
};

const NavbarParent = styled('div', {
  height: '74px',
  display: 'flex',
  alignItems: 'center',
  background: 'white',
  zIndex: 999,
  width: '100%',
  borderTop: '1px solid #E1E1E1',
  borderBottom: '1px solid #E1E1E1',

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

  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
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

const MobileNavbarWrapper = styled('div', {
  display: 'none',
  justifyContent: 'space-between',
  margin: '0 24px',
  width: '100%',

  '@media(max-width: 1100px)': {
    display: 'flex'
  }
});

const MobileDropdown = styled('div', {
  maxWidth: '250px',
  width: '100%',
  position: 'absolute',
  top: '128px',
  right: '24px',
  background: '#fff',
  zIndex: '1001',
  borderRadius: '4px',
  display: 'none',

  '&.open': {
    display: 'block'
  },
  '& .main-nav': {
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    '& a': {
      marginBottom: '8px',
      '&.active': { fontWeight: 'bold' },
      '&:last-child': { marginBottom: '0' }
    }
  }
});

export const SubNavbar = ({ logo, links = [], rightLinks = [], ctas = [] }: SubNavbarProps) => {
  const [ isOpen, setIsOpen ] = useState(false);

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
          </div>

          <div className="links" style={{ display: 'flex', justifyContent: 'center' }}>
            {links.map((v, i) => <Link id={`nav_sublevel_link-${i}`} {...v} />)}
          </div>

          <div className="right" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div className="links">
              {rightLinks.map((v, i) => <Link id={`nav_sublevel_right-link-${i}`} {...v} />)}
            </div>
            <div className="ctas" style={{ marginLeft: '24px', display: 'flex' }}>
              {ctas.map((v, i) => (<Button id={`cta-${i}`} {...v} />))}
            </div>
          </div>
        </NavbarWrapper>
        <MobileNavbarWrapper>
          <div className="left">
            { 
              logo ? (
                <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                  {logo}
                </div>
              ) : null
            }
          </div>
          <div className="right" style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={() => setIsOpen(!isOpen)} style={{ display: 'inline-flex', padding: '0', background: 'none', border: 'none' }}>
              Menu
              <ChevronDownIcon style={{ width: '18px', height: '18px', marginLeft: '4px', marginTop: '2px' }} />
            </button>
          </div>
        </MobileNavbarWrapper>
      </NavbarParent>
      <MobileDropdown className={isOpen ? 'open' : undefined}>
        <div className="main-nav">
          {links.map((link, i) => (
            <a href={link.href} className={link.active ? 'active' : undefined} key={i}>{link.label}</a>
          ))}
        </div>
      </MobileDropdown>
    </>
  );
}
