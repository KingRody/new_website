import { Box, Grid, Input, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { Container } from "./Container";
import Section from "./Section";
import RichText from "./RichText";
import Image from "next/image";
import dynamic from "next/dynamic";

const OpenStreetMap = dynamic(() => import("./OpenStreetMap"), {
  ssr: false,
});

const StyledGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledGridItem = styled(Box)`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(
      180deg,
      rgba(23, 240, 255, 0.2) 0%,
      rgba(23, 240, 255, 0) 100%
    ),
    #002329;
  padding: 2rem;
  gap: 1rem;

  p {
    color: #fff;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Map = ({ blok }) => {
  return (
    <Section title={blok.title} {...storyblokEditable(blok)}>
      <Container>
        <StyledGrid mb="4rem">
          {blok.grid.map((item, index) => (
            <StyledGridItem key={index}>
              <Image src={item.image.filename} width={50} height={50} />
              <RichText content={item.content} />
            </StyledGridItem>
          ))}
        </StyledGrid>
      </Container>
      <OpenStreetMap />
    </Section>
  );
};

export default Map;
