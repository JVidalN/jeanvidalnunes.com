import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className='scroll-smooth'>
        <Head />
        <body className='bg-th-bg-60'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
