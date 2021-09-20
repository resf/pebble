import { styled } from '@stitches/react';
import React, {
  forwardRef,
  MutableRefObject,
  ReactNode,
  useEffect,
  useState,
} from 'react';

export interface LinkProps {
  label: string;
  href: string;
  icon?: ReactNode | ReactNode[];
}
export interface LinkSection {
  title: string;
  items: LinkProps[];
}
export interface LinkDropdownListProps {
  open?: boolean;
  ref?: MutableRefObject<any>;
  mobile?: boolean;
  sections: LinkSection[];
}

const StyledComponent = styled('div', {
  position: 'absolute',
  width: '100%',
  zIndex: '1000',
  display: 'none',
  top: '75px',
  left: '0',
  borderBottom: '1px solid #E1E1E1',
  color: '#000',
  background: '#fff',
  padding: '32px 64px',
  userSelect: 'none',

  '& .section': {
    minWidth: '230px',
    '& ul': {
      display: 'flex',
      flexDirection: 'column',

      '& li': {
        paddingBottom: '2px',
        width: 'max-content',
        '&:hover': {
          paddingBottom: '1px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.6)',
        },
        '&:last-child': { marginBottom: '0' },
      },
    },
  },
  '&.open': {
    display: 'flex',
  },
  '&.mobile': {
    height: 'calc(100vh - 128px - 79px)',
    top: '68px',
    padding: '32px',
    borderTop: '1px solid #E1E1E1',
    flexDirection: 'column',
    '& .section': {
      marginBottom: '24px',
    },
  },
});

export const LinkDropdownList = forwardRef(
  ({ sections, open, mobile }: LinkDropdownListProps, ref) => {
    let classes = [];
    if (open) classes.push('open');
    if (mobile) classes.push('mobile');

    return (
      /** @ts-ignore */
      <StyledComponent className={classes.join(' ')} ref={ref}>
        {sections.map((s, i) => (
          <div className="section" key={i}>
            <h6
              style={{
                fontSize: '15px',
                marginBottom: '8px',
                color: 'rgba(0, 0, 0, 0.6)',
                fontWeight: 'bold',
              }}
            >
              {s.title}
            </h6>
            <ul>
              {s.items.map((l, i) => (
                <li key={i} style={{ marginBottom: '4px' }}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </StyledComponent>
    );
  }
);
