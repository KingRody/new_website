import Head from "next/head";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import Layout from "../components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home({ story, header, footer }) {
  story = useStoryblokState(story);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
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

export async function getStaticProps() {
  let slug = "home";
  let sbParams = {
    version: "published", // or 'draft'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: header } = await storyblokApi.get(`cdn/stories/header`, sbParams);
  let { data: footer } = await storyblokApi.get(`cdn/stories/footer`, sbParams);

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
