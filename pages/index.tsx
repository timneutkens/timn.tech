import Head from "next/head";
import Logo from "../components/logo";

export const config = {
  unstable_runtimeJS: false,
};

function Homepage() {
  return (
    <>
      <Head>
        <title>Tim Neutkens</title>
        <meta
          name="description"
          content="Hi! I'm Tim Neutkens, a software engineer from The Netherlands."
        />
      </Head>
      <main className="container px-10 md:px-20 lg:px-20 xl:px-20 mx-auto">
        <nav className="flex justify-between p-6">
          <Logo width={20} height={22} />
          <div className="space-x-4">
            <a href="https://github.com/timneutkens">GitHub</a>
            <a href="https://twitter.com/timneutkens">Twitter</a>
          </div>
        </nav>
        <div className="m-12 text-center">
          <Logo className="w-auto h-16 mx-auto" />
          <h1 className="text-5xl font-bold">Tim Neutkens</h1>
          <p className="tracking-widest uppercase">Development</p>
        </div>

        <section className="mb-6 text-gray-700">
          <h2 className="text-2xl text-gray-900 font-bold mb-4 leading-snug">
            About
          </h2>
          <p>
            Hi! I'm Tim Neutkens, a software engineer from The Netherlands.
            <br />
            You might know me as one of the authors of{" "}
            <a
              href="https://github.com/zeit/next.js"
              className="text-gray-900 underline"
            >
              Next.js
            </a>{" "}
            a popular open-source web development framework built on top of{" "}
            <a
              href="https://github.com/facebook/react"
              className="text-gray-900 underline"
            >
              React
            </a>
            .
          </p>
        </section>
        <section className="mb-6 text-gray-700">
          <h2 className="text-2xl text-gray-900 font-bold mb-4 leading-snug">
            Contact
          </h2>
          <p>
            Want to reach out? Contact me by{" "}
            <a
              href="mailto:hello@timn.tech"
              className="text-gray-900 underline"
            >
              Email
            </a>
            ,{" "}
            <a
              href="https://twitter.com/timneutkens"
              className="text-gray-900 underline"
            >
              Twitter
            </a>
            , or{" "}
            <a
              href="https://github.com/timneutkens"
              className="text-gray-900 underline"
            >
              GitHub
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
}

export default Homepage;
