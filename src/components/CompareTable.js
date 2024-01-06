import { Box, Grid, Heading, Image, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { Container } from "./Container";
import SectionTitle from "./SectionTitle";
import { StoryblokComponent } from "@storyblok/react";
import { useState } from "react";

import Check from "../assets/check.svg";
import Cross from "../assets/cross.svg";
import Section from "./Section";
import RichText from "./RichText";
import BlurBg from "./BlurBg";

const StyledContent = styled(Box)`
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

const StyledGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  border-radius: 10px;
  border: 1px solid linear-gradient(rgba(255, 255, 255, 0.2), #fff);
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.09) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(270deg, #002e36 34.18%, #141414 64.72%);
  padding: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const CompareTable = ({ blok }) => {
  const [activeRow, setActiveRow] = useState(0);

  return (
    <Section title={blok.title} {...storyblokEditable(blok)}>
      <BlurBg />
      <Container>
        <StyledContent>
          <RichText content={blok.content} />
        </StyledContent>
        <StyledGrid>
          <Box>
            <Heading as="h3" textAlign="center">
              Lorem Ipsum
            </Heading>
            {blok.table_left.map((nestedBlok, index) => (
              <StoryblokComponent
                blok={nestedBlok}
                key={nestedBlok._uid}
                index={index}
                isactive={index === activeRow}
                onClick={() => setActiveRow(index)}
                icon={Cross}
              />
            ))}
          </Box>
          <Box>
            <Heading as="h3" textAlign="center">
              Lorem Ipsum
            </Heading>
            {blok.table_right.map((nestedBlok, index) => (
              <StoryblokComponent
                blok={nestedBlok}
                key={nestedBlok._uid}
                index={index}
                isactive={index === activeRow}
                onClick={() => setActiveRow(index)}
                icon={Check}
              />
            ))}
          </Box>
        </StyledGrid>
      </Container>
    </Section>
  );
};

export default CompareTable;
