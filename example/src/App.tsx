import React from 'react'

import { ArrowNarrowRightIcon, CodeIcon } from '@heroicons/react/outline'

import { Button, CenterText, Container, Hero, Navbar, NavbarLink, PageWrapper, Sidekick, Spacer } from '@resf/pebble'
import '@resf/pebble/dist/styles.css';

const App = () => {
  const logo = (
    <svg style={{ width: '2rem' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.24264 50H0V45.7574L31.7574 14L12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8H39C40.6569 8 42 9.34315 42 11V38C42 39.6569 40.6569 41 39 41C37.3431 41 36 39.6569 36 38V18.2426L4.24264 50Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M50 0H0V47.1716L34.1716 13L21 13C19.8954 13 19 12.1046 19 11C19 9.89543 19.8954 9 21 9L39 9C40.1046 9 41 9.89543 41 11V29C41 30.1046 40.1046 31 39 31C37.8954 31 37 30.1046 37 29L37 15.8284L2.82843 50H50V0Z" fill="#10B981"/>
    </svg>
  );

  const buttons = [
    <Button primary href="/">
      Get started
      <ArrowNarrowRightIcon width="18" height="18" />
    </Button>,
    <Button href="https://github.com/resf/pebble">
      <CodeIcon width="18" height="18" />
      GitHub
    </Button>
  ];

  return (
    <div id="page">
      <Navbar logo={logo}>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/">About</NavbarLink>
        <NavbarLink href="/">Links</NavbarLink>
        <NavbarLink href="/">Community</NavbarLink>
      </Navbar>
      <PageWrapper>
        <Container>
          <Hero title="Pebble UI" subtitle="The RESF's custom UI library, built in React, built in React, built in React, built in React." buttons={buttons}>
            <img alt="Demo" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1980&q=80" />
          </Hero>
          <Spacer />
          <CenterText
            header="A drop-in replacement for your workloads."
            content="Rocky Linux aims to be 100% bug-for-bug compatible with the widely-trusted and highly stable RHEL®, so you can be confident in your servers."
            link={{ label: 'Learn More', href: '/' }} />
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
    </div>
  )
}

export default App
