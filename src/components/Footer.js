import { Box, HStack, Image, styled } from "@kuma-ui/core";
import { render } from "storyblok-rich-text-react-renderer";
import { Container } from "./Container";
import { StoryblokComponent } from "@storyblok/react";

const StyledFooter = styled.footer`
  background: #00242a;
`;

const StyledGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const Footer = ({ blok }) => {
  return (
    <StyledFooter>
      <Container>
        <StyledGrid>
          <Box>
            <Image src={blok.logo.filename} alt={blok.logo.alt} mb={0} />
            <Box display={["none", "none", "block"]}>
              {render(blok.content)}
            </Box>
          </Box>
          <Box>
            <HStack gap={16} whiteSpace="nowrap" justifyContent="center">
              {blok.footer_menu.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </HStack>
          </Box>
          <Box>
            <HStack
              gap={16}
              whiteSpace="nowrap"
              justifyContent={[null, null, "flex-end"]}
            >
              {blok.social_links.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </HStack>
          </Box>
          <Box display={["block", "block", "none"]}>{render(blok.content)}</Box>
        </StyledGrid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
