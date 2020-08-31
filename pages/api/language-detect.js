import acceptLanguageParser from "accept-language-parser";
export default function DetectLanguage(req, res) {
  const acceptLanguage = req.headers["accept-language"];
  const language = acceptLanguageParser.pick(["nl", "en"], acceptLanguage);

  if (language === "nl") {
    return res.redirect("/nl", 307);
  }

  // Default is english
  res.redirect("/en", 307);
}
