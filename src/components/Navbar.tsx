import React, { ReactNode, useEffect, useState } from 'react'
import { Flex } from '..'

interface Props {
  children?: ReactNode | ReactNode[]
  logo: ReactNode
}

export const Navbar = ({ children, logo }: Props) => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const onScroll = () => {
    setHasScrolled(window.scrollY > 0)
  }
  const navClasses = ['navbar']
  if (hasScrolled) navClasses.push('scroll')

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })

  return (
    <div className={navClasses.join(' ')}>
      <div className="navbar-inner">
        <div className="left flex gap-4">
          {logo}
          <Flex gap center>
            {children}
          </Flex>
        </div>
        <div className="right" />
      </div>
    </div>
  )
}
