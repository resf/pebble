import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  XIcon,
} from '@heroicons/react/outline';
import { styled } from '@stitches/react';
import React, {
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { LinkDropdownList, LinkDropdownListProps } from './LinkDropdownList';

export interface TopLevelLinkProps {
  id?: string;

  dropdown?: LinkDropdownListProps;

  label: string;
  href?: string;
  mobile?: boolean;
}

const LinkWrapper = styled('a', {
  display: 'inline-flex',
  // alignItems: 'center',
  fontSize: '15px',
  color: '#000',
  textDecoration: 'none',
  marginRight: '24px',
  paddingBottom: '2px',
  marginTop: '-5px',
  borderBottom: '1px solid transparent',
  userSelect: 'none',

  '@media (prefers-color-scheme: dark)': {
    color: '#fff',
  },

  '&.mobile': {
    width: '100%',
    justifyContent: 'space-between',

    marginRight: '0',
    marginBottom: '24px',
    fontSize: '18px',

    '&:hover': {
      paddingBottom: '2px',
      borderBottom: '1px solid transparent',
    },

    '& .icon': {
      height: '18px',
      width: '18px',
    },
  },

  '&.has-items': {
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
    marginBottom: '0',
  },

  '&:hover': {
    paddingBottom: '2px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.6)',
  },
});

const useOutside = (
  ref: MutableRefObject<any>,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref]);
};

export default ({ id, label, dropdown, href, mobile }: TopLevelLinkProps) => {
  const [isOpen, setOpen] = useState(false);

  let classes = [];
  let moreIcon = <ChevronDownIcon />;
  if (isOpen) moreIcon = <ChevronUpIcon />;

  if (mobile) {
    classes.push('mobile');
    moreIcon = <ChevronRightIcon />;
    if (isOpen) moreIcon = <XIcon />;
  }

  if (dropdown) classes.push('has-items');

  const itemRef = useRef(null);
  if (dropdown) useOutside(itemRef, setOpen);

  return (
    <>
      <LinkWrapper
        className={classes.join(' ')}
        id={id}
        href={href}
        onClick={() => setOpen(!isOpen)}
      >
        {label}
        {dropdown ? <div className="icon">{moreIcon}</div> : null}
      </LinkWrapper>
      {dropdown ? (
        <LinkDropdownList
          ref={itemRef}
          open={isOpen}
          mobile={mobile}
          sections={dropdown.sections}
        />
      ) : null}
    </>
  );
};
