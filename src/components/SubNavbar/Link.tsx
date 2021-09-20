import { ChevronDownIcon } from '@heroicons/react/outline';
import { styled } from '@stitches/react';
import React from 'react';

const LinkComponent = styled('a', {
  display: 'inline-flex',
  margin: '0 12px',
  paddingBottom: '2px',
  borderBottom: '1px solid transparent',

  '&.has-onclick': {
    cursor: 'pointer',
  },

  '& .icon': {
    marginTop: '4px',
    marginLeft: '4px',
    height: '13px',
    width: '13px',
  },

  '&:last-child': {
    marginRight: '0',
  },

  '&:hover, &.active': {
    borderBottom: '1px solid rgba(0, 0, 0, 0.6)',
  },
});

export interface LinkProps {
  label: string;
  href?: string;
  id?: string;
  onClick?: unknown;
  active?: boolean;
}

export const Link = ({ label, href, id, onClick, active }: LinkProps) => {
  let moreIcon = <ChevronDownIcon />;

  const classes = [];
  if (onClick) classes.push('has-onclick');
  if (active) classes.push('active');

  return (
    <LinkComponent className={classes.join(' ')} id={id} href={href}>
      {label}
      {onClick ? <div className="icon">{moreIcon}</div> : null}
    </LinkComponent>
  );
};
