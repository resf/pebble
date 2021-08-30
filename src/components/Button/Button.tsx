import React, { ReactNode } from 'react';
import { styled } from '@stitches/react';

export interface ButtonProps {
  /**
   * Whether or not to render this button using the primary colour.
   */
  primary?: boolean;

  /**
   * The contents to render inside of the Button element.
   */
  children?: ReactNode | ReactNode[];
};

/**
 * Generates a styled component to use as a button.
 * @param type The component to generate as a button
 * @returns styled
 */
const styledComponent = (type: 'a' | 'button', primary: boolean) => {
  return styled(type, {
    // base 
    display: 'flex',
    alignItems: 'center',

    height: '38px',
    fontSize: '15px',

    padding: '0 24px',

    border: '1px solid',
    borderColor: primary ? '#10B981' : 'rgba(0, 0, 0, 0.18)',
    borderRadius: '0',
    backgroundColor: primary ? '#10B981' : '',
    color: primary ? '#fff' : '#000',
    fontWeight: primary ? 'bold' : 'normal',
  });
}

export default ({ primary = false, children }: ButtonProps) => {
  const Component = styledComponent('button', primary);

  return (
    <Component>
      {children}
    </Component>
  );
};
