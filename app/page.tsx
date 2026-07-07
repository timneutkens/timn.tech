import type { ReactNode } from "react";
import Logo from "../components/logo";

function A({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a className="text-gray-900 underline" href={href}>
      {children}
    </a>
  );
}
export default function Homepage() {
  return (
    <main className="container px-10 md:px-20 lg:px-20 xl:px-40 mx-auto">
      <nav className="flex justify-between p-6">
        <Logo width={20} height={22} />
        <div className="space-x-4">
          <a href="https://github.com/timneutkens">GitHub</a>
          <a href="https://twitter.com/timneutkens">Twitter</a>
        </div>
      </nav>
      <div className="m-12 text-center">
        <Logo className="w-auto h-16 mx-auto" />
        <h1 className="text-5xl font-bold leading-normal">Tim Neutkens</h1>
        <p className="tracking-widest uppercase">Development</p>
      </div>

      <section className="mb-6 text-gray-700">
        <h2 className="text-2xl text-gray-900 font-bold mb-4 leading-snug">
          About
        </h2>
        <p>
          Hello! I'm Tim Neutkens, a software engineer from The Netherlands.
          <br />
          You might know me as one of the authors of{" "}
          <A href="https://github.com/vercel/next.js">Next.js</A> a popular
          open-source web development framework built on top of{" "}
          <A href="https://github.com/facebook/react">React</A>.
        </p>
      </section>
      <section className="mb-6 text-gray-700">
        <h2 className="text-2xl text-gray-900 font-bold mb-4 leading-snug">
          Contact
        </h2>
        <p>
          Want to reach out? Contact me by{" "}
          <A href="mailto:hello@timn.tech">Email</A>,{" "}
          <A href="https://twitter.com/timneutkens">Twitter</A>, or{" "}
          <A href="https://github.com/timneutkens">GitHub</A>
        </p>
      </section>
    </main>
  );
}
