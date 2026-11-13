package main

import (
	"html/template"
	"log"
	"net/http"
)

func GET(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Header().Set("X-Served-By", "Go")
	if err := homepage.Execute(w, nil); err != nil {
		log.Printf("render homepage: %v", err)
	}
}

var homepage = template.Must(template.New("homepage").Parse(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tim Neutkens</title>
  <meta name="description" content="Hi! I'm Tim Neutkens, a software engineer from The Netherlands.">
  <style>
    *, ::before, ::after { box-sizing: border-box; border: 0 solid #e5e7eb; }
    html {
      line-height: 1.5;
      -webkit-text-size-adjust: 100%;
      tab-size: 4;
      font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-feature-settings: normal;
      font-variation-settings: normal;
      -webkit-tap-highlight-color: transparent;
    }
    body { margin: 0; line-height: inherit; }
    h1, h2, p { margin: 0; }
    a { color: inherit; text-decoration: inherit; }
    svg { display: block; vertical-align: middle; }
    main { width: 100%; margin-inline: auto; padding-inline: 2.5rem; }
    nav { display: flex; justify-content: space-between; padding: 1.5rem; }
    .nav-logo .logo { width: 20px; height: 22px; }
    .social-links a + a { margin-left: 1rem; }
    .hero { margin: 3rem; text-align: center; }
    .hero .logo { width: auto; height: 4rem; margin-inline: auto; }
    h1 { font-size: 3rem; font-weight: 700; line-height: 1.5; }
    .tagline { letter-spacing: .1em; text-transform: uppercase; }
    section { margin-bottom: 1.5rem; color: #374151; }
    h2 { margin-bottom: 1rem; color: #111827; font-size: 1.5rem; font-weight: 700; line-height: 1.375; }
    section a { color: #111827; text-decoration: underline; }
    @media (min-width: 640px) { main { max-width: 640px; } }
    @media (min-width: 768px) { main { max-width: 768px; padding-inline: 5rem; } }
    @media (min-width: 1024px) { main { max-width: 1024px; } }
    @media (min-width: 1280px) { main { max-width: 1280px; padding-inline: 10rem; } }
    @media (min-width: 1536px) { main { max-width: 1536px; } }
  </style>
</head>
<body>
  <main>
    <nav aria-label="Social links">
      <div class="nav-logo">{{template "logo"}}</div>
      <div class="social-links">
        <a href="https://github.com/timneutkens">GitHub</a>
        <a href="https://twitter.com/timneutkens">Twitter</a>
      </div>
    </nav>
    <div class="hero">
      {{template "logo"}}
      <h1>Tim Neutkens</h1>
      <p class="tagline">Development</p>
    </div>
    <section aria-labelledby="about">
      <h2 id="about">About</h2>
      <p>
        Hello! I'm Tim Neutkens, a software engineer from The Netherlands.
        <br>
        You might know me as one of the authors of
        <a href="https://github.com/vercel/next.js">Next.js</a> a popular
        open-source web development framework built on top of
        <a href="https://github.com/facebook/react">React</a>.
      </p>
    </section>
    <section aria-labelledby="contact">
      <h2 id="contact">Contact</h2>
      <p>
        Want to reach out? Contact me on
        <a href="https://x.com/timneutkens">X</a>, or
        <a href="https://github.com/timneutkens">GitHub</a>
      </p>
    </section>
  </main>
  <script defer src="/_vercel/insights/script.js"></script>
</body>
</html>
{{define "logo"}}<svg class="logo" width="50" height="55" viewBox="0 0 50 55" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g transform="translate(-325.000000, -123.000000) translate(207.000000, 123.000000) translate(117.957447, 0.000000)" fill="#000" fill-rule="nonzero" stroke="none" stroke-width="1">
    <polygon points="14.7446809 0 49.1489362 0 49.1489362 14.7446809 0 14.7446809" />
    <polygon transform="translate(24.574468, 35.223404) scale(-1, 1) rotate(-270.000000) translate(-24.574468, -35.223404)" points="19.6595745 27.8510638 44.2340426 27.8510638 44.2340426 42.5957447 4.91489362 42.5957447" />
  </g>
</svg>{{end}}
`))
