import { Box, Heading, Image, Text, styled } from "@kuma-ui/core";

import QuoteIcon from "../assets/quote.svg";

const StyledQuoteWrapper = styled(Box)`
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const StyledQuote = styled(Box)`
  padding: 2rem;
  border-radius: 20px 20px 20px 0px;
  background: var(--mittel-trkis, #012f37);
  margin-bottom: 1rem;

  p {
    color: #fff;
    white-space: pre-wrap;
  }
`;

const Quote = ({ content, person_name, person_position }) => (
  <StyledQuoteWrapper>
    <StyledQuote>
      <Box>
        <Image src={QuoteIcon.src} />
        <Text variant="large">{content}</Text>
      </Box>
    </StyledQuote>
    <Heading as="h3" mb={0}>
      {person_name}
    </Heading>
    <Text>{person_position}</Text>
  </StyledQuoteWrapper>
);

export default Quote;
