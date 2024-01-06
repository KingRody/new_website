import Head from "next/head";
import Layout from "../components/Layout";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLocaleFromPath } from "@/utils/helper";

export default function Page({ story, header, footer }) {
  story = useStoryblokState(story);
  return (
    <div>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header blok={header.content} />
        <StoryblokComponent blok={story.content} />
        <Footer blok={footer.content} />
      </Layout>
    </div>
  );
}

export async function getStaticProps({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  const locale = getLocaleFromPath(params.slug);

  let sbParams = {
    version: "published", // or 'draft'
  };

  const headerUrl = locale === "en" ? "header" : `${locale}/header`;
  const footerUrl = locale === "en" ? "footer" : `${locale}/footer`;

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: header } = await storyblokApi.get(
    `cdn/stories/${headerUrl}`,
    sbParams
  );
  let { data: footer } = await storyblokApi.get(
    `cdn/stories/${footerUrl}`,
    sbParams
  );

  return {
    props: {
      story: data ? data.story : false,
      header: header ? header.story : false,
      footer: footer ? footer.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: "",
  });

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
