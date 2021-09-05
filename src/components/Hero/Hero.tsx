import React, { ReactNode } from 'react';
import { styled } from '@stitches/react';
import Button, { ButtonProps } from '../Button/Button';

export interface HeroProps {
  headline: string;
  subheader?: string;
  background?: string;
  illustration?: ReactNode | ReactNode[];
  ctas?: ButtonProps[];
};

const Component = styled('div', {
  display: 'flex',
  alignItems: 'center',
  minHeight: '440px',
  width: '100%',
  background: '#000',
  color: '#fff',
  padding: '64px',
  boxSizing: 'border-box',
  justifyContent: 'space-between',

  '& > .left, & > .right': {
    maxWidth: '640px',
    width: '100%',
    margin: '0 16px',
    '&.left': {
      marginLeft: '0',
      '& h1': {
        maxWidth: '540px',
      }
    },
    '&.right': {
      marginRight: '0'
    }
  },

  '& h1': {
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight: '1.2',
    margin: '0 0 21px 0'
  },
  '& h2': {
    margin: '0 0 21px 0',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '1.2'
  }
});

export default ({ headline, subheader, ctas = [], background }: HeroProps) => {
  return (
    <Component css={{ background }}>
      <div className="left">
        <h1>{headline}</h1>
        { subheader ? <h2>{subheader}</h2> : null}
        {ctas.map((v, i) => (<Button id={`cta-${i}`} {...v} />))}
      </div>
      <div className="right">
        <h1>{headline}</h1>
      </div>
    </Component>
  )
};
