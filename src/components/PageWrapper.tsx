import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export const PageWrapper = ({ children }: Props) => {
  return <div className="mt-16 px-4">{children}</div>
}
