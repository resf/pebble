import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { styled } from '@stitches/react';
import React from 'react';
import globalStyles from '../../globalStyles';

export interface TopLevelLinkProps {
  id?: string;

  label: string;
  href?: string;
  mobile?: boolean;
  onClick?: () => void;
}

const LinkWrapper = styled('a', {
  display: 'inline-flex',
  // alignItems: 'center',
  fontSize: '15px',
  color: '#000',
  textDecoration: 'none',
  marginRight: '24px',
  paddingBottom: '4px',
  marginTop: '-5px',
  borderBottom: '1px solid transparent',

  '&.mobile': {
    width: '100%',
    justifyContent: 'space-between',

    marginRight: '0',
    marginBottom: '24px',
    fontSize: '18px',

    '& .icon': {
      height: '18px',
      width: '18px'
    }
  },

  '&.has-onclick': {
    cursor: 'pointer'
  },

  '& .icon': {
    marginTop: '2px',
    marginLeft: '4px',
    height: '13px',
    width: '13px'
  },

  '&:last-child': {
    marginRight: '0',
    marginBottom: '0'
  },

  '&:hover': {
    paddingBottom: '4px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.6)'
  }
});

export default ({ id, label, onClick, href, mobile }: TopLevelLinkProps) => {
  globalStyles();

  let classes = [];
  let moreIcon = <ChevronDownIcon />;

  if (mobile) {
    classes.push('mobile');
    moreIcon = <ChevronRightIcon />;
  }

  if (onClick) classes.push('has-onclick');

  return (
    <LinkWrapper className={classes.join(' ')} id={id} href={href} onClick={onClick}>
      {label}
      {
        onClick ?
          (
            <div className="icon">{moreIcon}</div>
          ) :
          null
      }
    </LinkWrapper>
  );
}
