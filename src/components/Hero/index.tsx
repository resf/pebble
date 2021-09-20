import React, { ReactNode } from 'react';
import { styled } from '@stitches/react';
import { Button, ButtonProps } from '../Button';

export interface HeroProps {
  headline: string;
  subheader?: string;
  background?: string;
  illustration?: ReactNode | ReactNode[];
  ctas?: ButtonProps[];
  id?: string;
}

const Component = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  minHeight: '440px',
  height: '100%',
  width: '100%',
  background: '#000',
  color: '#fff',
  padding: '0 64px',
  boxSizing: 'border-box',
  // justifyContent: 'space-between',

  '& .ctas a, & .ctas button': {
    marginRight: '24px',
    '&:last-child': {
      marginRight: '0',
    },
  },

  '& > .left, & > .right': {
    // display: 'flex',
    // alignItems: 'center',
    // flexDirection: 'column',
    // maxWidth: '640px',
    width: '100%',
    margin: '0 16px',
    '&.left': {
      marginLeft: '0',
      '& h1': {
        maxWidth: '80%',
      },
    },
    '&.right': {
      marginRight: '0',
      display: 'flex',
      justifyContent: 'space-around',
    },
  },

  '& h1': {
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight: '1.2',
    margin: '0 0 21px 0',
  },
  '& h2': {
    margin: '0 0 21px 0',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '1.2',
  },

  '@media (max-width: 1100px)': {
    maxHeight: '880px',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto auto',
    padding: '0 32px',
    '& .left': {
      textAlign: 'center',
      '& h1': {
        margin: '0 auto 21px auto',
        fontSize: '28px',
        maxWidth: '100%',
      },
      gridRow: '2',
      marginBottom: '24px',
      '& .ctas': {
        flexDirection: 'column',
      },
      '& .ctas a, & .ctas button': {
        margin: '24px 12px',
        '&:first-child': { marginLeft: '0' },
        '&:last-child': { marginRight: '0' },
      },
    },
    '& .right': {
      gridRow: '1',
      marginBottom: '24px',
    },
  },
});

export const Hero = ({
  headline,
  subheader,
  ctas = [],
  background,
  illustration,
  id,
}: HeroProps) => {
  return (
    <Component css={{ background }} id={id}>
      <div className="left">
        <h1>{headline}</h1>
        {subheader ? <h2>{subheader}</h2> : null}
        {ctas ? (
          <div className="ctas">
            {ctas.map((v, i) => (
              <Button id={`cta-${i}`} {...v} />
            ))}
          </div>
        ) : null}
      </div>
      <div className="right">{illustration}</div>
    </Component>
  );
};
