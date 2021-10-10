import React, { ReactNode } from 'react'
import { Flex } from '../..'

interface Props {
  /** The title */
  title: string

  /** The subtitle */
  subtitle: string

  /** The buttons (or other CTAs) to render below the title and subtitle */
  buttons?: ReactNode | ReactNode[]

  /**
   * The elements to render above (on mobile/tablet) or to the side of the
   * title, subtitle and CTAs
   */
  children?: ReactNode | ReactNode[]

  /**
   * Whether or not the layout should be content|text instead of text|content.
   */
  flipped?: boolean
}

/**
 * A landing page hero section.
 */
export const Sidekick = ({
  children,
  title,
  subtitle,
  buttons,
  flipped
}: Props) => {
  const classes = ['sidekick']

  if (flipped) classes.push('flipped')

  return (
    <div className={classes.join(' ')}>
      <div className="text">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {buttons ? <Flex gap center children={buttons} /> : null}
      </div>
      <div className='content'>{children}</div>
    </div>
  )
}

