import { Box, Flex, Grid, Image, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { Container } from "./Container";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import RichText from "./RichText";

const StyledBox = styled(Box)`
  border-radius: 10px;
  background: linear-gradient(
      180deg,
      rgba(23, 255, 249, 0.13) 0%,
      rgba(23, 255, 249, 0) 94.27%
    ),
    #002329;
  padding: 2rem;
`;

const StyledOneColumnCtaItem = styled(Box)`
  display: grid;
  grid-template-columns: 4fr 5fr;
  align-items: center;

  @media (max-width: 767px) {
    grid-template-columns: 2fr 1fr;
    overflow: hidden;
    align-items: flex-end;
    background: linear-gradient(
        180deg,
        rgba(23, 255, 249, 0.13) 0%,
        rgba(23, 255, 249, 0) 94.27%
      ),
      #002329;

    .cta-item--content {
      background: none;
      order: -1;
      z-index: 1;

      h2 {
        font-size: 1.5rem;
      }
    }

    .cta-item--image {
      transform: scale(2) translateX(2.5rem);
      transform-origin: right bottom;
      z-index: 0;
  }
`;

const StyledTwoColumnCtaItem = styled(Box)`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background: linear-gradient(
      180deg,
      rgba(23, 255, 249, 0.13) 0%,
      rgba(23, 255, 249, 0) 94.27%
    ),
    #002329;
  padding: 2rem 0 2rem 2rem;
`;

const OneColumnCtaItem = ({ blok }) => (
  <StyledOneColumnCtaItem>
    {blok?.image && (
      <Image
        src={blok.image.filename}
        alt={blok.image.alt}
        mb={[0, 0, "-4rem"]}
        display="block"
        className="cta-item--image"
      />
    )}
    <StyledBox className="cta-item--content">
      <RichText content={blok.content} />
    </StyledBox>
  </StyledOneColumnCtaItem>
);

const TwoColumnCtaItem = ({ blok }) => (
  <StyledTwoColumnCtaItem>
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      gap="1rem"
    >
      <RichText content={blok.content} />
      {blok.buttons && (
        <Box>
          {blok.buttons.map((button) => (
            <Button
              key={button._uid}
              href={button.link.cached_url}
              variant={button.variant}
              target={button.link.target}
            >
              {button.label}
            </Button>
          ))}
        </Box>
      )}
    </Flex>
    <Box alignSelf="flex-end">
      <Image
        src={blok.image.filename}
        alt={blok.image.alt}
        mb={[0, 0, "-2rem"]}
        display="block"
      />
    </Box>
  </StyledTwoColumnCtaItem>
);

export { OneColumnCtaItem, TwoColumnCtaItem };
