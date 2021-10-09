import React, { ReactNode } from 'react'
import { Flex } from '..'

interface Props {
  children?: ReactNode | ReactNode[]
  primary?: boolean
  small?: boolean
  href?: string
}

export const Button = ({ children, primary, small, href }: Props) => {
  const classes = ['btn']
  const Component = href ? 'a' : 'button'

  if (primary) classes.push('btn-primary')
  if (small) classes.push('btn-sm')

  const props = {
    className: classes.join(' '),
    children: <Flex gap center tight={small} children={children} />
  } as { [key: string]: any }

  if (href) props.href = href

  return <Component {...props} />
}
