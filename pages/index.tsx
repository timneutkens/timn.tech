import Head from 'next/head'
import Logo from '../components/logo'

export const config = {
  unstable_runtimeJS: false
}

function Screen({children, half, className}: any) {
  return <div className="screen">
    <div className={`content${className ? ' ' + className : ''}`}>
      {children}
    </div>
  </div>
}

function Homepage() {
  return <>
    <Head>
      <title>Tim Neutkens</title>
      <meta name="description" content="Hi! I'm Tim Neutkens, a software engineer from The Netherlands." />
    </Head>
    <main className="container">
      <header>
        <Logo width={20} height={22} />
        <div>
          <a href="https://github.com/timneutkens">GitHub</a>
          <a href="https://twitter.com/timneutkens">Twitter</a>
        </div>
      </header>
      <Screen className="hero">
        <Logo />
        <h1>Tim Neutkens</h1>
        <p>Development</p>
      </Screen>
      <Screen>
        <section>
          <h2>About</h2>
          <p>Hi! I'm Tim Neutkens, a software engineer from The Netherlands.</p>
          <p>You might know me as one of the authors of <a href="https://github.com/zeit/next.js">Next.js</a> a popular open-source web development framework built on top of <a href="https://github.com/facebook/react">React</a>.</p>
        </section>
      </Screen>
      <Screen>
        <section>
          <h2>Contact</h2>
          <p>Want to reach out? Contact me by <a href="mailto:hello@timn.tech">Email</a>, <a href="https://twitter.com/timneutkens">Twitter</a>, or <a href="https://github.com/timneutkens">GitHub</a>.</p>
        </section>
      </Screen>
    </main>
  </>
}

export default Homepage
