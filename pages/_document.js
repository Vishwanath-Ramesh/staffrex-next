import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="keywords" content="IT Staffing, Medical, Recruitment" />
          <meta
            name="description"
            content="We are an International recruitment firm specializing in recruiting Healthcare & IT professionals. We explore and reach out to people for successful deployments of Nurses and Doctors with an excellent track record of 98% of retention post-interview"
          />
          <meta
            name="subject"
            content="One stop solution for Medical & IT Staffing"
          />
          <meta name="copyright" content="StaffRex" />
          <meta name="url" content="https://staffrex.vercel.app/"></meta>
          <meta name="og:title" content="StaffRex" />
          <meta name="og:type" content="website" />
          <meta name="og:url" content="https://staffrex.vercel.app/" />
          <meta
            name="og:image"
            content="https://staffrex.vercel.app/assets/images/staffrex-logo.png"
          />
          <meta name="og:site_name" content="StaffRex" />
          <meta
            name="og:description"
            content="One stop solution for Medical & IT Staffing"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
