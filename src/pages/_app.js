import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "@/components/Page";
import Header from "@/components/Header";
import HeaderMenu from "@/components/HeaderMenu";
import MenuLink from "@/components/MenuLink";
import Hero from "@/components/Hero";
import FullWidthImage from "@/components/FullWidthImage";

import { Manrope } from "next/font/google";
import LogoSlider from "@/components/LogoSlider";
import TabsSection from "@/components/TabsSection";

import CompareTable from "@/components/CompareTable";
import CompareTableItem from "@/components/CompareTableItem";
import TwoColumnFixed from "@/components/TwoColumnFixed";
import TwoColumnItem from "@/components/TwoColumnItem";
import { UspGrid, UspGridItem } from "@/components/UspGrid";
import QuoteSlider from "@/components/QuoteSlider";
import Footer from "@/components/Footer";
import SocialLink from "@/components/SocialLink";
import LatestArticles from "@/components/LatestArticles";

const manrope = Manrope({ weight: ["300", "600"], subsets: ["latin"] });

import "@/styles/globals.css";
import TwoColumn from "@/components/TwoColumn";
import TwoColumnSection from "@/components/TwoColumnSection";
import Team from "@/components/Team";
import { Grid, GridItem } from "@/components/Grid";
import TimelineSlider from "@/components/TimelineSlider";
import FullWidthImageSection from "@/components/FullWidthImageSection";
import Article from "@/components/Article";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import Resources from "@/components/Resources";
import CtaSection from "@/components/CtaSection";

const components = {
  hero: Hero,
  page: Page,
  article: Article,
  resources: Resources,
  header: Header,
  footer: Footer,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
  social_link: SocialLink,
  full_width_image_section: FullWidthImageSection,
  full_width_image: FullWidthImage,
  logo_slider: LogoSlider,
  tabs_section: TabsSection,
  compare_table: CompareTable,
  compare_table_item: CompareTableItem,
  two_column: TwoColumn,
  two_column_fixed: TwoColumnFixed,
  two_column_item: TwoColumnItem,
  two_column_section: TwoColumnSection,
  usp_grid: UspGrid,
  usp_grid_item: UspGridItem,
  quote_slider: QuoteSlider,
  latest_articles: LatestArticles,
  team: Team,
  cta_section: CtaSection,
  grid: Grid,
  grid_item: GridItem,
  timeline_slider: TimelineSlider,
  contact_form: ContactForm,
  map: Map,
};

storyblokInit({
  accessToken: process.env.storyblokPreviewToken,
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={manrope.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
