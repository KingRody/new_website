import { Grid, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import { Container } from "./Container";
import { getStoryblokApi } from "@storyblok/react";
import { useEffect, useState } from "react";
import Section from "./Section";
import ArticleTeaser from "./ArticleTeaser";
import BlurBg from "./BlurBg";

const StyledGrid = styled(Grid)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 767px) {
    display: block;
  }
`;

const LatestArticles = ({ blok }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: "published", // or 'draft'
        starts_with: "resources/",
        is_startpage: false,
        per_page: 2,
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
    <Section title={blok.title} {...storyblokEditable(blok)}>
      <BlurBg />
      <Container>
        <StyledGrid>
          {articles.map((article) => (
            <ArticleTeaser
              key={article._uid}
              article={article.content}
              variant="large"
            />
          ))}
        </StyledGrid>
      </Container>
    </Section>
  );
};

export default LatestArticles;
