import { Box, Heading, Image, styled } from "@kuma-ui/core";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Container } from "./Container";
import RichText from "./RichText";

const StyledHeader = styled.header`
  padding: 8rem 0 4rem;
`;

const Article = ({ blok }) => {
  return (
    <Box as="article" {...storyblokEditable(blok)}>
      <Container>
        <Box maxWidth={768} margin="0 auto">
          <StyledHeader>
            <Heading as="h1">{blok.title}</Heading>
            <Image
              src={blok.image.filename}
              alt={blok.image.alt}
              width="100%"
              borderRadius={10}
            />
          </StyledHeader>
          <RichText content={blok.content} mb="4rem" />
        </Box>
        {blok.article_footer?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </Container>
    </Box>
  );
};
export default Article;
