import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head />
      <meta charSet='utf-8' />

      <link rel='icon' type='image/png' sizes='16x16' href='/logo/icon.png' />
      <link rel='manifest' href='/manifest.json' />
      <meta name='theme-color' content='#000000' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
