import { Box, Button, Heading, Image, Text, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import Section from "./Section";
import { Container } from "./Container";
import { render } from "storyblok-rich-text-react-renderer";
import { StoryblokComponent } from "@storyblok/react";
import SectionTitle from "./SectionTitle";

const TwoColumnSection = ({ blok }) => {
  return (
    <Section {...storyblokEditable(blok)}>
      <Container>
        <SectionTitle title={blok.title} />
        {blok.rows.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </Container>
    </Section>
  );
};

export default TwoColumnSection;
