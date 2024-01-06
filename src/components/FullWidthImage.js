import { Box, Image, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { Container } from "./Container";
import Section from "./Section";
import RichText from "./RichText";

const StyledFullWidthImage = styled(Section)`
  position: relative;
`;

const StyledContent = styled(Box)`
  position: relative;
  z-index: 1;
  color: #fff;
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
  padding: 8rem 0 0;

  h2 {
    font-size: 2.5rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FullWidthImage = ({ blok }) => {
  return (
    <StyledFullWidthImage {...storyblokEditable(blok)}>
      <StyledImage src={blok.image.filename} alt={blok.image.alt} />
      <StyledContent>
        <Container>
          <RichText content={blok.content} />
        </Container>
      </StyledContent>
    </StyledFullWidthImage>
  );
};

export default FullWidthImage;
