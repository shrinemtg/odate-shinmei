import { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentProps } from 'next/document'

export default function Document(props: DocumentProps) {
  return (
    <Html lang='ja'>
      <Head {...props} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
