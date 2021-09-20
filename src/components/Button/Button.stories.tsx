import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './Button';
import { ChatAlt2Icon, ArrowNarrowRightIcon } from '@heroicons/react/outline';
import Styler from '../Styler/Styler';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Styler>
    <Button {...args} />
  </Styler>
);

export const Standard = Template.bind({});
Standard.args = { primary: false, children: 'Submit' };

export const Primary = Template.bind({});
Primary.args = { primary: true, children: 'Go and see that thing' };

export const Link = Template.bind({});
Link.args = {
  link: 'https://chat.rockylinux.org',
  children: 'Join the discussion',
};

export const PreIcon = Template.bind({});
PreIcon.args = {
  link: 'https://chat.rockylinux.org',
  preIcon: <ChatAlt2Icon />,
  children: 'Join the discussion',
};

export const PostIcon = Template.bind({});
PostIcon.args = { postIcon: <ArrowNarrowRightIcon />, children: 'Learn more' };

export const IconOnly = Template.bind({});
IconOnly.args = { icon: true, children: <ArrowNarrowRightIcon /> };

export const PrimaryIconOnly = Template.bind({});
PrimaryIconOnly.args = {
  primary: true,
  icon: true,
  children: <ArrowNarrowRightIcon />,
};
