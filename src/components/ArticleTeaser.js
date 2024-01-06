import { Box, Heading, Image, Link, Text, styled } from "@kuma-ui/core";

const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
};

const StyledArticle = styled(Box)`
  background: var(
    --Gradients-3D-Box,
    linear-gradient(
      180deg,
      rgba(23, 255, 249, 0.13) 0%,
      rgba(23, 255, 249, 0) 94.27%
    ),
    #002329
  );
  padding: 2rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 2rem;
`;

const StyledImage = styled(Image)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 0;
  display: block;
  width: 100%;
  object-fit: cover;
`;

const ArticleTeaser = ({ article, variant }) => (
  <Link href={`/resources/${article.slug}`}>
    <StyledImage
      src={article.image.filename}
      alt={article.image.alt}
      height={variant === "latest" ? 300 : 200}
    />
    <StyledArticle>
      <Heading as="h3" className={`${variant}`}>
        {truncate(article.title, 40)}
      </Heading>
      <Text>{truncate(article.excerpt, 100)}</Text>
      <Text as="time" color="#17FFF9">
        {new Date(article.published_at).toLocaleDateString("en-US", {
          dateStyle: "medium",
        })}
      </Text>
    </StyledArticle>
  </Link>
);

export default ArticleTeaser;
