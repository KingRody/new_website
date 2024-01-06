import Document, { Html, Head, Main, NextScript } from "next/document";
import { createStyleRegistry, StyleRegistry } from "@kuma-ui/core";
import { getLocaleFromPath } from "@/utils/helper";
import { getStoryblokApi } from "@storyblok/react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { req, query } = ctx;
    let slug = query.slug ? query.slug.join("/") : "home";

    let host = req ? req.headers.host : "";

    const locale = getLocaleFromPath(query.slug);

    const registry = createStyleRegistry();
    const originalRenderPage = ctx.renderPage;

    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get(`cdn/stories/${slug}`);

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            (
              <StyleRegistry registry={registry}>
                <App {...props} />
              </StyleRegistry>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        host,
        locale,
        alternate_links: data.story.content?.alternate_links || [],
        styles: [initialProps.styles, registry.styles()],
      };
    } finally {
      registry.flush();
    }
  }
  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <link rel="canonical" href="https://test.de" />
          {this.props.alternate_links?.map((link) => (
            <link
              key={link.lang}
              rel="alternate"
              hrefLang={link.lang}
              href={`https://${this.props.host}/${link.link.cached_url}/`}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
