import React, { ReactNode } from 'react'
import { Flex } from '../Flex';

interface Props {
  features: {
    name: string
    description: string
    icon: ReactNode | ReactNode[]
    color?:
      | 'gray'
      | 'red'
      | 'yellow'
      | 'green'
      | 'blue'
      | 'indigo'
      | 'purple'
      | 'pink'
  }[]
}

export const FeatureBox = ({ features }: Props) => (
  <div className="grid gap-8 lg:grid-cols-2">
    {features.map((v, i) => (
      <Flex gap key={i}>
        <div className={`icon flex-1 rounded-md p-2 h-9 w-9 bg-${v.color}-200 dark:bg-${v.color}-900`}>{v.icon}</div>
        <div className="flex-shrink">
          <h1 className="text-lg font-bold font-display">{v.name}</h1>
          <p className="leading-relaxed mt-1 text-gray-600 dark:text-gray-400">{v.description}</p>
        </div>
      </Flex>
    ))}
  </div>
);
