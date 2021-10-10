import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode | ReactNode[]
}

export const PageWrapper = ({ children }: Props) => (
  <div className="bg-white dark:bg-[#111] text-gray-900 dark:text-white">{children}</div>
)
