import { Box, Heading, Image, Text, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import ParticlesBg from "./ParticlesBg";
import Button from "./Button";

const StyledHero = styled(Box)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledBgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledContent = styled(Box)`
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  max-width: 768px;
`;

const Hero = ({ blok }) => {
  return (
    <StyledHero {...storyblokEditable(blok)}>
      <StyledContent>
        {blok.icon && (
          <Image
            src={blok.icon.filename}
            alt={blok.icon.alt}
            mb="1rem"
            height={100}
            width={100}
          />
        )}
        <Heading as="h1">{blok.headline}</Heading>
        <Text mb="2rem">{blok.content}</Text>
        {blok.buttons?.map((button) => {
          return (
            <Button
              href={button.link?.cached_url}
              key={button._uid}
              variant={+button.is_primary ? "primary" : "secondary"}
              mr={16}
              {...storyblokEditable(button)}
            >
              {button.label}
            </Button>
          );
        })}
      </StyledContent>
      {blok.bg_img.filename ? (
        <StyledBgImage src={blok.bg_img.filename} alt={blok.headline} />
      ) : (
        <ParticlesBg />
      )}
    </StyledHero>
  );
};

export default Hero;
