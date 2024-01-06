import { Box, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { Container } from "./Container";
import Section from "./Section";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";

const StyledGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  position: relative;
  align-items: center;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const StyledFixedColumn = styled(Box)`
  position: sticky;
  top: 25vh;
  align-self: start;

  @media (max-width: 767px) {
    order: -1;
    top: 10vh;
    margin-bottom: 45vh;
  }
`;

const StyledBox = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: opacity 0s ease-in-out;
`;

const defaultOptions = {
  loop: false,
};

const TwoColumnFixed = ({ blok }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // see which section is in view
    document.addEventListener("scroll", () => {
      const sections = document.querySelectorAll(".ref-section");
      const sectionTops = [];
      sections.forEach((section) => {
        sectionTops.push(section.getBoundingClientRect().top);
      });
      const index = sectionTops.findIndex((top) => top > 0);
      setActiveIndex(index);
    });
  }, []);

  return (
    <Section {...storyblokEditable(blok)}>
      <Container>
        <StyledGrid>
          <Box>
            {blok.sections.map((section) => (
              <Box className="ref-section" height="70vh" key={section._uid}>
                {render(section.content)}
              </Box>
            ))}
          </Box>
          <StyledFixedColumn>
            {blok.sections.map((section, index) => (
              <StyledBox
                opacity={
                  activeIndex === index || activeIndex === -1 ? "1" : "0"
                }
                position={activeIndex === -1 ? "relative" : "absolute"}
                key={section._uid}
              >
                {section.lottie && (
                  <Lottie
                    options={{
                      ...defaultOptions,
                      animationData: JSON.parse(section.lottie),
                    }}
                    isStopped={activeIndex !== index}
                    isClickToPauseDisabled={true}
                  />
                )}
              </StyledBox>
            ))}
          </StyledFixedColumn>
        </StyledGrid>
      </Container>
    </Section>
  );
};

export default TwoColumnFixed;
