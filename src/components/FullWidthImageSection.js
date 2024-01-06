import { Box, Image, Text, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { Container } from "./Container";
import Section from "./Section";
import RichText from "./RichText";

const StyledWrapper = styled(Box)`
  position: relative;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 90vh;
`;

const StyledFullWidthImage = styled(Box)`
  position: relative;
  height: 90vh;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
`;

const StyledContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  z-index: 1;
  color: white;
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledFlex = styled(Box)`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const StyledSectionIndex = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

const StyledIndex = styled(Box)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #18fff9;
`;

const FullWidthImageSection = ({ blok }) => {
  return (
    <Section title={blok.title} {...storyblokEditable(blok)}>
      <StyledWrapper>
        {blok.sections.map((section, index) => (
          <StyledFullWidthImage key={index}>
            <StyledContent>
              <Container>
                <StyledFlex>
                  <RichText maxWidth={768} content={section.content} />
                </StyledFlex>
              </Container>
            </StyledContent>
            <StyledImage src={section.image.filename} alt={section.image.alt} />
          </StyledFullWidthImage>
        ))}
      </StyledWrapper>
    </Section>
  );
};

const SectionIndex = ({ index }) => {
  return (
    <StyledSectionIndex>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="202"
        viewBox="0 0 2 202"
        fill="none"
      >
        <path
          d="M1 0L1.00001 202"
          stroke="url(#paint0_linear_1070_4123)"
          stroke-opacity="0.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1070_4123"
            x1="1.00001"
            y1="202"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#18FFF9" />
            <stop offset="1" stop-color="#18FFF9" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <StyledIndex>{index}</StyledIndex>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="264"
        viewBox="0 0 2 264"
        fill="none"
      >
        <path
          d="M1 264L1.00001 -1.51992e-05"
          stroke="#18FFF9"
          stroke-opacity="0.5"
        />
      </svg>
    </StyledSectionIndex>
  );
};

export default FullWidthImageSection;
