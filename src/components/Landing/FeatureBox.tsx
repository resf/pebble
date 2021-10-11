import React, { ReactNode } from 'react'
import { Flex } from '../Flex'

interface Feature {
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
  link?: string
}

interface Props {
  features: Feature[]
}

const FeatureComponent = ({ feature }: { feature: Feature }) => (
  <Flex gap className="p-4 border border-gray-300 hover:-translate-y-2 transition duration-200 ease-in-out">
    <div className={`icon flex-1 p-4 h-[52px] w-[52px] bg-${feature.color}-200 dark:bg-${feature.color}-900`}>{feature.icon}</div>
    <div className="flex-shrink">
      <h1 className="text-lg font-bold font-display">{feature.name}</h1>
      <p className="leading-relaxed mt-1 text-gray-600 dark:text-gray-400">{feature.description}</p>
    </div>
  </Flex>
)

export const FeatureBox = ({ features }: Props) => (
  <div className="grid gap-8 lg:grid-cols-2">
    {features.map((v, i) => {
      return v.link ? (
        <a href={v.link}>
          <FeatureComponent key={i} feature={v} />
        </a>
      ) : (
        <FeatureComponent key={i} feature={v} />
      )
    })}
  </div>
)
