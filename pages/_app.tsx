import "../styles/global.css";
import { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import NL_MESSAGES from "../compiled-lang/nl.json";
import { useRouter } from "next/router";

const messages: any = {
  en: {},
  nl: NL_MESSAGES,
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <IntlProvider
      locale={router.locale!}
      defaultLocale={router.defaultLocale}
      messages={messages[router.locale!]}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
