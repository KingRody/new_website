import { Box, Image, styled } from "@kuma-ui/core";
import { render } from "storyblok-rich-text-react-renderer";
import Lottie from "react-lottie";

const StyledGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 4rem 0;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  &:nth-child(odd) {
    .image {
      order: -1;
    }
  }
`;

const TwoColumnItem = ({ blok }) => (
  <StyledGrid>
    <Box>{render(blok.content)}</Box>
    <Box className="image">
      {blok.lottie.lenght >= 0 ? (
        <Lottie
          options={{
            animationData: JSON.parse(blok.lottie),
          }}
        />
      ) : (
        <Image src={blok.image.filename} alt={blok.image.alt} />
      )}
    </Box>
  </StyledGrid>
);

export default TwoColumnItem;
