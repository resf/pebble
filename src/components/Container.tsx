import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode | ReactNode[]
  className?: string
}

export const Container = (props: Props) => (
  <div className={`max-w-screen-xl w-full mx-auto ${props.className}`}>
    {props.children}
  </div>
)
