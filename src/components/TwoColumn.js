import { Box, Button, Heading, Image, Text, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import Section from "./Section";
import { Container } from "./Container";
import { render } from "storyblok-rich-text-react-renderer";
import BlurBg from "./BlurBg";

const StyledGrid = styled(Box)`
  display: grid;
  grid-gap: 2rem;
  align-items: center;
  justify-items: center;
  padding: 4rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr !important;
  }
`;

const TwoColumn = ({ blok }) => {
  let columns = "2fr 1fr";

  if (blok.image_width === "33") {
    columns = "1fr 2fr";
  } else if (blok.image_width === "50") {
    columns = "1fr 1fr";
  }

  return (
    <Section {...storyblokEditable(blok)}>
      <BlurBg />
      <Container>
        <StyledGrid gridTemplateColumns={columns}>
          <Image src={blok.image.filename} alt={blok.image.alt} />
          <Box>{render(blok.content)}</Box>
        </StyledGrid>
      </Container>
    </Section>
  );
};

export default TwoColumn;
