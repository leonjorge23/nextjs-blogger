import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html className='has-tab-navigation header-dark js flexbox flexboxlegacy no-touch csstransforms csstransforms3d no-overflowscrolling webkit chrome mac js no-mobile-device custom-scroll'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}