import { Box, Heading, Image, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { Container } from "./Container";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Section from "./Section";

const StyledGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
  justify-items: center;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledItemContent = styled(Box)`
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  background: linear-gradient(
      180deg,
      rgba(23, 255, 249, 0.13) 0%,
      rgba(23, 255, 249, 0) 94.27%
    ),
    #002329;
  padding: 1.5rem;

  p:last-child {
    margin-bottom: 0;
  }
`;

const StyledImage = styled(Box)`
  display: block;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
  overflow: hidden;
`;

const Grid = ({ blok }) => {
  return (
    <Section title={blok.title} {...storyblokEditable(blok)}>
      <Container>
        <StyledGrid>
          {blok.items.map((column) => (
            <GridItem blok={column} key={column._uid} />
          ))}
        </StyledGrid>
      </Container>
    </Section>
  );
};

const GridItem = ({ blok }) => {
  return (
    <Box>
      <StyledImage as={Image} src={blok.image.filename} alt={blok.image.alt} />
      <StyledItemContent>{render(blok.content)}</StyledItemContent>
    </Box>
  );
};

export { Grid, GridItem };
