import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Hero, { HeroProps } from './Hero';
import Styler from '../Styler/Styler';
import { ArrowRightIcon } from '@heroicons/react/outline';

export default {
  title: "Components/Hero",
  component: Hero,
} as Meta;

const Template: Story<HeroProps> = (args) => <Styler><Hero {...args} /></Styler>

export const Standard = Template.bind({});
Standard.args = {
  headline: 'Building the next generation of open-source, enterprise-grade software.',
  subheader: 'The RESF develops, curates and maintains Enterprise-ready open source solutions that help keep the Industry moving.',
  background: 'linear-gradient(180deg, #1FA4A4 0%, #10B981 100%)',
  illustration: (
    <svg width="437" height="437" viewBox="0 0 437 437" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect y="63.4871" width="378" height="378" transform="rotate(-9.66895 0 63.4871)" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0" transform="scale(0.000333333)"/>
</pattern>
</defs>
</svg>
  ),
  ctas: [
    {
      children: 'See our projects',
      postIcon: <ArrowRightIcon />,
      link: '#'
    }
  ]
};