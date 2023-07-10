import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
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

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="sortcut icon" href="/c_capacitar.jpeg" type="image/png" />
          <link
            rel="stylesheet"
            href="node_modules/bootstrap/dist/css/bootstrap.min.css"
          />
          <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
          {/* <!-- Google --> */}
          <meta name="description" content="Sistema para teste de segurança" />
          <meta name="robots" content="index, nofollow" />
          <meta
            name="googlebot"
            content="index, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
