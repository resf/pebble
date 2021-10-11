import React from 'react'

import { ArrowNarrowRightIcon, CodeIcon, PresentationChartLineIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/outline'

import { Button, CenterText, Container, FeatureBox, Hero, Navbar, NavbarLink, PageWrapper, Sidekick, Spacer } from '@resf/pebble'
import '@resf/pebble/dist/styles.css';

const App = () => {
  const features = [
    {
      name: 'Binary compatibility with RHEL',
      description: 'Rocky Linux is built from the same sources as Red Hat Enterprise Linux, making it incredible stable and a solid platform for stabile server workloads.',
      icon: <CodeIcon width="20" />,
      color: 'red' as const,
      link: '#'
    },
    {
      name: 'Rock(y) Solid',
      description: 'Rocky Linux is built with stability in mind, and never bumps major package versions, meaning you\'ll never need to worry about an update breaking compatibility with the hundreds of other packages you use.',
      icon: <PresentationChartLineIcon width="20" />,
      color: 'blue' as const,
      link: '#'
    },
    {
      name: 'Secure',
      description: 'Rocky Linux publishes its Errata for all to view, and keeps up with all the security updates affecting it, so you can quickly see if that package that had a massive vulnerability is patched on Rocky yet.',
      icon: <ShieldCheckIcon width="20" />,
      color: 'green' as const,
      link: '#'
    },
    {
      name: 'Always free, always open',
      description: 'Rocky Linux is an open source project. That\'ll never change. All our sources are available on our GitLab server. So if we ever \'go rogue\' (not that we have any plans to), the community can pick up where we left off.',
      icon: <UserGroupIcon width="20" />,
      color: 'purple' as const
    }
  ];

  const logo = (
    <svg style={{ width: '2rem' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.24264 50H0V45.7574L31.7574 14L12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8H39C40.6569 8 42 9.34315 42 11V38C42 39.6569 40.6569 41 39 41C37.3431 41 36 39.6569 36 38V18.2426L4.24264 50Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M50 0H0V47.1716L34.1716 13L21 13C19.8954 13 19 12.1046 19 11C19 9.89543 19.8954 9 21 9L39 9C40.1046 9 41 9.89543 41 11V29C41 30.1046 40.1046 31 39 31C37.8954 31 37 30.1046 37 29L37 15.8284L2.82843 50H50V0Z" fill="#10B981"/>
    </svg>
  );

  const buttons = [
    <Button primary href="/" key="1">
      Get started
      <ArrowNarrowRightIcon width="18" height="18" />
    </Button>,
    <Button href="https://github.com/resf/pebble" key="2">
      <CodeIcon width="18" height="18" />
      GitHub
    </Button>
  ];

  return (
    <PageWrapper>
      <Navbar logo={logo}>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/">About</NavbarLink>
        <NavbarLink href="/">Links</NavbarLink>
        <NavbarLink href="/">Community</NavbarLink>
      </Navbar>
      <Container className="px-4">
        <Hero title="Pebble UI" subtitle="The RESF's custom UI library, built in React, built in React, built in React, built in React." buttons={buttons}>
          <img alt="Demo" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1980&q=80" />
        </Hero>
        <Spacer />
        <CenterText
          header="A drop-in replacement for your workloads."
          content="Rocky Linux aims to be 100% bug-for-bug compatible with the widely-trusted and highly stable RHEL®, so you can be confident in your servers."
          link={{ label: 'Learn More', href: '/' }} />
        <Spacer />
        <FeatureBox features={features} />
        <Spacer />
        <Sidekick
          title="Stability guaranteed."
          subtitle="Rocky Linux is built from tested, stable versions of software, with regular updates being released to keep you on top of things.">
          <img alt="Demo" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1980&q=80" />
        </Sidekick>
        <Spacer />
        <Sidekick
          flipped
          title="Stability guaranteed."
          subtitle="Rocky Linux is built from tested, stable versions of software, with regular updates being released to keep you on top of things.">
          <img alt="Demo" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1980&q=80" />
        </Sidekick>
        <Spacer />
        <Sidekick
          title="Stability guaranteed."
          subtitle="Rocky Linux is built from tested, stable versions of software, with regular updates being released to keep you on top of things.">
          <img alt="Demo" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1980&q=80" />
        </Sidekick>
        <Spacer />
      </Container>
    </PageWrapper>
  )
}

export default App
