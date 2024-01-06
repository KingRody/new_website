import { Box, Heading, Image, Text, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { Container } from "./Container";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Section from "./Section";

const StyledGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
`;

const StyledTeamMember = styled(Box)`
  display: flex;
  align-items: center;
  border-radius: 0.625rem;
  background: linear-gradient(
      180deg,
      rgba(23, 255, 249, 0.13) 0%,
      rgba(23, 255, 249, 0) 94.27%
    ),
    #002329;
  padding: 1rem 0 0 1rem;
`;

const StyledImage = styled(Image)`
  height: 240px;
  width: auto;
  display: block;
`;

const StyledContent = styled(Box)`
  transform: translateY(1rem);
  transition: all 0.3s ease-in-out;

  .team-member:hover & {
    transform: translateY(0);
  }
`;

const StyledHiddenContent = styled(Box)`
  opacity: 0;
  transition: all 0.3s ease-in-out;
  font-size: 0.875rem;

  .team-member:hover & {
    opacity: 1;
  }
`;

const Team = ({ blok }) => {
  return (
    <Section title={blok.title} {...storyblokEditable(blok)}>
      <Container>
        <StyledGrid>
          {blok.team_members.map((item) => (
            <StyledTeamMember className="team-member" key={item._uid}>
              <StyledContent flexGrow="1">
                <Heading as="h3" mb="0.5rem">
                  {item.name}
                </Heading>
                <StyledHiddenContent>
                  <Text>{item.position}</Text>
                </StyledHiddenContent>
              </StyledContent>
              <Box alignSelf="flex-end" justifySelf="flex-end" flexShrink="0">
                <StyledImage src={item.image.filename} alt={item.image.alt} />
              </Box>
            </StyledTeamMember>
          ))}
        </StyledGrid>
      </Container>
    </Section>
  );
};

export default Team;
