import { styled } from '@stitches/react';
import React from 'react';
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
  }
});

export default ({ logo, leftLinks = [], rightLinks = [], ctas = [] }: NavbarProps) => (
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
  </NavbarParent>
);
