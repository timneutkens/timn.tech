import "../styles/global.css";
import { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import NL_MESSAGES from "../compiled-lang/nl.json";

const messages: any = {
  en: {},
  nl: NL_MESSAGES,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider
      locale={pageProps.lang}
      defaultLocale="en"
      messages={messages[pageProps.lang]}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
