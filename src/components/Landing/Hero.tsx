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
}

/**
 * A landing page hero section.
 */
export const Hero = ({ children, title, subtitle, buttons }: Props) => {
  return (
    <div className='hero'>
      <div className="text">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <Flex gap center children={buttons} />
      </div>
      <div className='content'>{children}</div>
    </div>
  )
}
