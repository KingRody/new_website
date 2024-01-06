import { Box, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import Section from "./Section";
import { Container } from "./Container";
import SectionTitle from "./SectionTitle";
import { OneColumnCtaItem, TwoColumnCtaItem } from "./CtaItem";

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

const CtaSection = ({ blok }) => {
  return (
    <Section title={blok.title} {...storyblokEditable(blok)}>
      <Container>
        {blok.columns.length === 2 ? (
          <StyledGrid>
            {blok.columns.map((column) => (
              <TwoColumnCtaItem blok={column} key={column._uid} />
            ))}
          </StyledGrid>
        ) : (
          <OneColumnCtaItem blok={blok.columns[0]} />
        )}
      </Container>
    </Section>
  );
};

export default CtaSection;
