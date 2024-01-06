import { Box, Heading, Image, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { Container } from "./Container";
import { useState } from "react";
import RichText from "./RichText";
import Section from "./Section";

const StyledTab = styled(Box)`
  display: flex;
  flex: 1 1 0;
  align-items: center;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &.active {
    background: var(--dunkel-trkis, #001f24);
  }

  &:hover {
    background: var(
      --Gradients-3D-Box---Mouseover,
      linear-gradient(
        180deg,
        rgba(23, 240, 255, 0.2) 0%,
        rgba(23, 240, 255, 0) 100%
      ),
      #002329
    );
  }
`;

const StyledTabNav = styled(Box)`
  display: inline-flex;
  align-items: space-between;
  padding: 1rem;
  justify-content: center;
  gap: 2.5rem;
  border-radius: 10px;
  background: var(
    --Gradients-3D-Box,
    linear-gradient(
      180deg,
      rgba(23, 255, 249, 0.13) 0%,
      rgba(23, 255, 249, 0) 94.27%
    ),
    #002329
  );
`;

const StyledTabNavWrapper = styled(Box)`
  text-align: center;
  margin-bottom: 5rem;

  @media (max-width: 767px) {
    display: none;
  }
`;

const StyledTabSection = styled(Box)`
  display: none;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: center;
  padding: 2rem 0;

  @media (max-width: 767px) {
    display: block;
    border-radius: 10px;
    background: linear-gradient(
        180deg,
        rgba(23, 255, 249, 0.13) 0%,
        rgba(23, 255, 249, 0) 94.27%
      ),
      #002329;
    padding: 2rem;
    margin-bottom: 2rem;
  }

  &.active {
    display: grid;

    @media (max-width: 767px) {
      display: block;
    }
  }
`;

const TabsSection = ({ blok }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section {...storyblokEditable(blok)}>
      <Container>
        <StyledTabNavWrapper>
          <StyledTabNav>
            {blok.tabs.map((tab, index) => {
              return (
                <StyledTab
                  key={tab._uid}
                  index={index}
                  onClick={() => setActiveTab(index)}
                  className={activeTab === index ? "active" : ""}
                >
                  <Image
                    src={tab.icon.filename}
                    alt={tab.icon.alt}
                    mr="1rem"
                    mb={0}
                  />
                  <Heading as="h3" mb={0} textAlign="left">
                    {tab.title}
                  </Heading>
                </StyledTab>
              );
            })}
          </StyledTabNav>
        </StyledTabNavWrapper>
        {blok.tabs.map((tab, index) => {
          return (
            <StyledTabSection
              key={tab._uid}
              index={index}
              className={activeTab === index ? "active" : ""}
            >
              <Box>
                <Box
                  textAlign="center"
                  mb="2rem"
                  display={["block", "block", "none"]}
                >
                  <Image src={tab.icon.filename} alt={tab.icon.alt} mb="1rem" />
                  <Heading as="h3">{tab.title}</Heading>
                </Box>
                <Image
                  src={tab.image.filename}
                  alt={tab.image.alt}
                  mb={["2rem", "2rem", 0]}
                />
              </Box>
              <RichText content={tab.content} />
            </StyledTabSection>
          );
        })}
      </Container>
    </Section>
  );
};

export default TabsSection;
