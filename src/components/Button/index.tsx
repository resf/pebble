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

  postText?: string;

  id?: string;

  centered?: boolean;

  css?: any;
}

/**
 * Generates a styled component to use as a button.
 * @param type The component to generate as a button
 * @returns StyledComponent
 */
const styledComponent = (
  type: 'a' | 'button',
  primary: boolean,
  icon: boolean
) => {
  return styled(type, {
    // base
    display: type == 'a' ? 'inline-flex' : 'flex',
    alignItems: 'center',

    height: type == 'a' ? '36px' : '38px',
    fontSize: '15px',
    width: icon ? (type == 'a' ? '36px' : '38px') : undefined,

    padding: icon ? '10px' : '0 24px',

    border: '1px solid',
    borderColor: primary ? '#10B981' : '#E1E1E1',
    borderRadius: '0',
    backgroundColor: primary ? '#10B981' : '#fff',
    color: primary ? '#fff' : '#000',
    fontWeight: primary ? 'bold' : 'normal',
    textDecoration: 'none',

    justifyContent: 'space-around',

    transition: '.1s ease',
    transitionProperty: 'background-color, color',

    '& .icon': {
      display: 'flex',
      alignItems: 'center',
      width: '18px',
      height: '18px',

      '&.pre': { marginRight: '10px' },
      '&.post': { marginLeft: '10px' },
    },

    '& .post-text': {
      marginLeft: '10px',
      fontWeight: 'normal',
      color: primary ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
    },

    '&:hover': {
      backgroundColor: primary ? '#059669' : '#E1E1E1',
      borderColor: primary ? '#059669' : '#E1E1E1',
    },
  });
};

export const Button = ({
  preIcon,
  postIcon,
  primary = false,
  link,
  css = {},
  icon = false,
  children,
  id,
  postText,
}: ButtonProps) => {
  const type = link ? 'a' : 'button';
  const Component = styledComponent(type, primary, icon);

  let args = {};
  if (type == 'a') {
    args = { href: link };
  }

  return (
    <Component css={css} id={id} {...args}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        {preIcon ? <div className="icon pre">{preIcon}</div> : null}
        {children}
        {postText ? <span className="post-text">{postText}</span> : null}
        {postIcon ? <div className="icon post">{postIcon}</div> : null}
      </div>
    </Component>
  );
};
