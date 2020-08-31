import Head from "next/head";
import Logo from "../components/logo";
import { FormattedMessage, useIntl, defineMessage } from "react-intl";
import { GetStaticPropsContext, GetStaticPaths } from "next";

export const config = {
  unstable_runtimeJS: false,
};

const A: React.FC<{ href: string }> = ({ children, ...props }) => {
  return (
    <a className="text-gray-900 underline" {...props}>
      {children}
    </a>
  );
};

const NextjsLink: React.FC<{}> = ({ children }) => {
  return <A href="https://github.com/vercel/next.js">{children}</A>;
};

const ReactLink: React.FC<{}> = ({ children }) => {
  return <A href="https://github.com/facebook/react">{children}</A>;
};

const titleMessage = defineMessage({
  id: "home-seo-description",
  description: "SEO description of the homepage",
  defaultMessage:
    "Hi! I'm Tim Neutkens, a software engineer from The Netherlands.",
});

function Homepage() {
  const intl = useIntl();
  return (
    <>
      <Head>
        <title>Tim Neutkens</title>
        <meta name="description" content={intl.formatMessage(titleMessage)} />
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
            <FormattedMessage
              id="about"
              description="About title on homepage"
              defaultMessage="About"
            />
          </h2>
          <p>
            <FormattedMessage
              id="intro"
              description="Introduction"
              defaultMessage="Hi! I'm Tim Neutkens, a software engineer from The Netherlands."
            />
            <br />
            <FormattedMessage
              id="you-might-know-me"
              description="Introduction paragraph"
              defaultMessage="You might know me as one of the authors of <NextjsLink>Next.js</NextjsLink> a popular open-source web development framework built on top of <ReactLink>React</ReactLink>."
              values={{
                NextjsLink: (chunks: any) => <NextjsLink>{chunks}</NextjsLink>,
                ReactLink: (chunks: any) => <ReactLink>{chunks}</ReactLink>,
              }}
            />
          </p>
        </section>
        <section className="mb-6 text-gray-700">
          <h2 className="text-2xl text-gray-900 font-bold mb-4 leading-snug">
            <FormattedMessage
              id="contact"
              description="Contact title"
              defaultMessage="Contact"
            />
          </h2>
          <p>
            <FormattedMessage
              id="contact-details"
              description="Contact details"
              defaultMessage="Want to reach out? Contact me by <email></email>, <twitter></twitter>, or <github></github>"
              values={{
                email: () => <A href="mailto:hello@timn.tech">Email</A>,
                twitter: () => (
                  <A href="https://twitter.com/timneutkens">Twitter</A>
                ),
                github: () => (
                  <A href="https://github.com/timneutkens">GitHub</A>
                ),
              }}
            />
          </p>
        </section>
      </main>
    </>
  );
}

export function getStaticProps({ params }: any) {
  return {
    props: {
      lang: params.lang,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          lang: "en",
        },
      },
      {
        params: {
          lang: "nl",
        },
      },
    ],
    fallback: false,
  };
}

export default Homepage;
