import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
  href?: string
}

export const NavbarLink = ({ children, href }: Props) => {
  return <a className="navbar-link" href={href}>{children}</a>
}
