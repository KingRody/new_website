import { Box, Heading, Image, styled } from "@kuma-ui/core";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import { Container } from "./Container";
import RichText from "./RichText";
import Section from "./Section";
import { useEffect, useState } from "react";
import ArticleTeaser from "./ArticleTeaser";

const StyledGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 767px) {
    display: block;
  }
`;

const Resources = ({ blok }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: "", // or ''
        starts_with: "resources/",
        is_startpage: false,
      });

      setArticles((prev) =>
        data.stories.map((article) => {
          article.content.slug = article.slug;
          return article;
        })
      );
    };
    getArticles();
  }, []);

  return (
    <Section {...storyblokEditable(blok)}>
      <Container>
        <Heading as="h1" py="2rem" variant="small">
          {blok.title}
        </Heading>
        <StyledGrid>
          {articles[0] &&
            articles.map((article) => (
              <ArticleTeaser article={article.content} key={article.uuid} />
            ))}
        </StyledGrid>
      </Container>
    </Section>
  );
};
export default Resources;
