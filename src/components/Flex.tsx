import React, { ReactNode } from 'react'

interface Props {
  /** The content to render inside the flexbox. */
  children?: ReactNode | ReactNode[]

  /** Whether this flexbox should render as a column. */
  col?: boolean

  /** Whether this flexbox should include gaps between elements. */
  gap?: boolean

  /** Whether the gaps in this flexbox should be small. */
  tight?: boolean

  /** Whether or not to center all the items in this flexbox. */
  center?: boolean

  /** The ID to assign to this flexbox. */
  id?: string

  /** Any extra classes to assign to this flexbox. */
  className?: string
}

/**
 * A simple flexbox element, useful to quickly inline multiple elements.
 */
export const Flex = ({
  children,
  col = false,
  gap = false,
  tight = false,
  center = false,
  id,
  className
}: Props) => {
  const classes = ['flex']

  if (col) classes.push('flex-col')
  if (gap) {
    if (tight) {
      classes.push('gap-2')
    } else {
      classes.push('gap-4')
    }
  }
  if (center) classes.push('items-center')

  if (className) classes.push(className)

  return (
    <div id={id} className={classes.join(' ')}>
      {children}
    </div>
  )
}
