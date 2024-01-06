/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Teaser from "./Teaser";
import Page from "./Page";
import Header from "./Header";
import HeaderMenu from "./HeaderMenu";
import MenuLink from "./MenuLink";

const components = {
  teaser: Teaser,
  page: Page,
  header: Header,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
};

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.storyblokPreviewToken,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
