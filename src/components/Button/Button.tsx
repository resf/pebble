import React, { ReactNode } from 'react';
import { styled } from '@stitches/react';
import globalStyles from '../../globalStyles';

export interface ButtonProps {
  preIcon?: JSX.Element;
  postIcon?: JSX.Element;

  /**
   * Whether or not to render this button using the primary colour.
   */
  primary?: boolean;

  /**
   * The URL to make this button link to. (Will turn the button into an a)
   */
  link?: string;

  /**
   * The contents to render inside of the Button element.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Whether or not this button is icon-only.
   */
  icon?: boolean;

  id?: string;

  centered?: boolean;

  css?: any;
};

/**
 * Generates a styled component to use as a button.
 * @param type The component to generate as a button
 * @returns StyledComponent
 */
const styledComponent = (type: 'a' | 'button', primary: boolean, icon: boolean) => {
  return styled(type, {
    // base 
    display: type == 'a' ? 'inline-flex' : 'flex',
    alignItems: 'center',

    height: type == 'a' ? '36px' : '38px',
    fontSize: '15px',
    width: icon ? (type == 'a' ? '36px' : '38px') : undefined,

    padding: icon ? '10px' : '0 24px',

    border: '1px solid',
    borderColor: primary ? '#10B981' : 'rgba(0, 0, 0, 0.18)',
    borderRadius: '0',
    backgroundColor: primary ? '#10B981' : '#fff',
    color: primary ? '#fff' : '#000',
    fontWeight: primary ? 'bold' : 'normal',
    textDecoration: 'none',

    justifyContent: 'space-around',
    
    '& .icon': {
      display: 'flex',
      alignItems: 'center',
      width: '18px',
      height: '18px',

      '&.pre': { marginRight: '10px' },
      '&.post': { marginLeft: '10px' },
    }
  });
}

export default ({
  preIcon, postIcon, primary = false, link, css = {}, icon = false, children, id
}: ButtonProps) => {
  const type = link ? 'a' : 'button';
  const Component = styledComponent(type, primary, icon);

  let args = {};
  if (type == 'a') {
    args = { href: link };
  }

  globalStyles();

  return (
    <Component css={css} id={id} {...args}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {preIcon ? <div className="icon pre">{preIcon}</div> : null}
        {children}
        {postIcon ? <div className="icon post">{postIcon}</div> : null}
      </div>
    </Component>
  );
};
