import { Image } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const SocialLink = ({ blok }) => (
  <Link href={blok.link.cached_url} {...storyblokEditable(blok)}>
    <Image src={blok.icon.filename} alt={blok.label} />
  </Link>
);

export default SocialLink;
