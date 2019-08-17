import Head from 'next/head'
import Logo from '../components/logo'
import Screen from '../components/screen'
import AboutText from '../text/about.mdx'
import ContactText from '../text/contact.mdx'
import { MDXProvider } from '@mdx-js/react'
import {SFC} from 'react'

const Container: SFC = ({children}) => {
  return <div>
    {children}
    <style jsx global>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        text-rendering: optimizeLegibility;
        margin: 0;
      }
    `}</style>
    <style jsx>{`
      div {
        max-width: 950px;
        padding: 20px;
        margin: 0 auto;
      }
    `}</style>
  </div>
}

const A: SFC<{noUnderline?: boolean, href: string}> = ({children, noUnderline, href}) => {
  return <a rel="noopener" className={`${noUnderline ? ' no-underline' : ''}`} href={href} target={href[0] === '.' || href.indexOf('mailto:') === 0 ? undefined : '_blank'}>
    {children}
    <style jsx>{`
      a {
        color: #000;
      }

      .no-underline {
        text-decoration: none;        
      }
    `}</style>
  </a>
}

const H2: SFC = ({children}) => {
  return <h2>
    {children}
    <style jsx>{`
      h2 {
        text-align: center;
      }
    `}</style>
  </h2>
}

const Header = () => {
  return <header>
    <Logo width={20} height={22} />
    <div>
      <A noUnderline href="https://github.com/timneutkens">GitHub</A>&nbsp;&nbsp;&nbsp;&nbsp;
      <A noUnderline href="https://twitter.com/timneutkens">Twitter</A>
    </div>
    <style jsx>{`
      header {
        padding-top: 15px;
        padding-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `}</style>
  </header>
}

const Hero = () => {
  return <div>
    <Logo />
    <h1>Tim Neutkens</h1>
    <p>Development</p>
    <style jsx>{`
      div {
        text-align: center;
      }
      h1 {
        font-size: 40px;
        margin-top: 18px;
        margin-bottom: 8px;
      }
      p {
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 3.28px;
        margin: 0;
      }
    `}</style>
  </div>
}

export const config = {
  amp: true
}

export default () => {
  return <MDXProvider components={{h2: H2, a: A}}>
    <Head>
      <title>Tim Neutkens</title>
      <meta name="description" content="Hi! I'm Tim Neutkens, a 22 year old software engineer from The Netherlands. You might know me as one of the authors of Next.js a popular open-source web development framework built on top of React." />
    </Head>
    <Container>
      <Screen>
        <Header />
        <Hero />
      </Screen>
      <Screen height="50vh">
        <div>
          <AboutText />
        </div>
      </Screen>
      <Screen height="50vh">
        <div>
          <ContactText />
        </div>
      </Screen>
    </Container>
  </MDXProvider>
}