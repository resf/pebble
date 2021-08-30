import { ChevronDownIcon } from '@heroicons/react/outline';
import { styled } from '@stitches/react';
import React from 'react';
import globalStyles from '../../globalStyles';

export interface TopLevelLinkProps {
  id?: string;

  label: string;
  href?: string;
  onClick?: () => void;
}

const LinkWrapper = styled('a', {
  display: 'inline-flex',
  // alignItems: 'center',
  fontSize: '15px',
  color: '#000',
  textDecoration: 'none',
  marginRight: '24px',

  '& .icon': {
    marginTop: '2px',
    marginLeft: '4px',
    height: '13px',
    width: '13px'
  },

  '&:last-child': {
    marginRight: '0'
  }
});

export default ({ id, label, onClick, href }: TopLevelLinkProps) => {
  globalStyles();

  return (
    <LinkWrapper id={id} href={href} onClick={onClick}>
      {label}
      {onClick ? <div className="icon"><ChevronDownIcon /></div> : null}
    </LinkWrapper>
  );
}
