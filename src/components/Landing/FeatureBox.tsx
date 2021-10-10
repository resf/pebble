import React, { ReactNode } from 'react'

interface Props {
  features: {
    name: string
    description: string
    icon: ReactNode | ReactNode[]
    color?: string
  }[]
}

export const FeatureBox = ({ features }: Props) => (
  <div className="grid lg:grid-cols-2">

  </div>
);
