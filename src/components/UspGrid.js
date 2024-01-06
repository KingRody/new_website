import { Box, Heading, Image, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { Container } from "./Container";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Section from "./Section";
import RichText from "./RichText";

const StyledGrid = styled(Box)`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr;
  gap: 1.5rem;
  margin: 1.5rem 0;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    margin: 2rem;
  }

  &.grid-4 {
    grid-template-columns: 0.75fr 1fr 1fr 0.75fr;
  }
`;

const StyledGridItem = styled(Box)`
  display: flex;
  padding: 1.875rem;
  height: 15rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  cursor: pointer;
  background: linear-gradient(
      180deg,
      rgba(23, 255, 249, 0.13) 0%,
      rgba(23, 255, 249, 0) 94.27%
    ),
    #002329;

  &.mock {
    opacity: 0.5;

    &:first-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &:last-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  .hide-row & {
    opacity: 0.5;
    background: linear-gradient(
        180deg,
        rgba(0, 31, 36, 0) 0%,
        rgba(0, 16, 20, 1) 100%
      ),
      #002329;
    height: 7.5rem;
    margin-bottom: -2.5rem;

    @media (max-width: 767px) {
      display: none;
    }
  }
`;

const StyledItemContent = styled(Box)`
  opacity: 0;
  font-size: 0.875rem;
  transition: all 0.3s ease-in-out;

  .grid__item:hover & {
    opacity: 1;
  }
`;

const StyledItemHeading = styled(Box)`
  transform: translateY(50%);
  transition: all 0.3s ease-in-out;

  .grid__item:hover & {
    transform: translateY(0);
  }
`;

const UspGrid = ({ blok }) => {
  return (
    <Section title={blok.title} {...storyblokEditable(blok)}>
      <Container>
        <RichText
          content={blok.content}
          maxWidth="720px"
          margin="0 auto"
          textAlign="center"
          mb="5rem"
        />
      </Container>
      <StyledGrid className={blok.first_row.length === 2 ? "grid-4" : "grid-5"}>
        <StyledGridItem className="mock" />
        {blok.first_row.map((nestedBlok) => (
          <UspGridItem blok={nestedBlok} key={nestedBlok._uid} />
        ))}
        <StyledGridItem className="mock" />
      </StyledGrid>
      <StyledGrid
        className={`${blok.second_row.length === 2 ? "grid-4" : "grid-5"} ${
          blok.hide_second_row && "hide-row"
        }`}
      >
        <StyledGridItem className="mock" />
        {blok.second_row.map((nestedBlok) => (
          <UspGridItem blok={nestedBlok} key={nestedBlok._uid} />
        ))}
        <StyledGridItem className="mock" />
      </StyledGrid>
    </Section>
  );
};

const UspGridItem = ({ blok }) => {
  return (
    <StyledGridItem className="grid__item" {...storyblokEditable(blok)}>
      <StyledItemHeading>
        {blok.icon.filename && (
          <Image
            src={blok.icon.filename}
            alt={blok.icon.alt}
            mb={0}
            width={50}
            height={50}
          />
        )}
        <Heading as="h4">{blok.title}</Heading>
      </StyledItemHeading>
      <StyledItemContent>{render(blok.content)}</StyledItemContent>
    </StyledGridItem>
  );
};

export { UspGrid, UspGridItem };
