import React from 'react'
import { Flex } from '../Flex'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'

interface Props {
  header: string
  content: string
  link?: {
    label: string
    href: string
  }
}

export const CenterText = ({ header, content, link }: Props) => {
  return (
    <Flex col gap tight className="text-center sm:max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold font-display">{header}</h3>
      <p className="text-gray-600 dark:text-gray-400">{content}</p>
      {link ? (
        <a href={link.href}>
          <Flex center gap tight className="transition-colors duration-200 ease-in-out text-green-500 font-bold justify-center border-b border-white dark:border-[#111] hover:border-green-500 w-max mx-auto">
            {link.label}
            <ArrowNarrowRightIcon height='18' width='18' />
          </Flex>
        </a>
      ) : undefined}
    </Flex>
  )
}
