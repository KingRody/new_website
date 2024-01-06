import { Box, Grid, Image, Input, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { Container } from "./Container";
import SectionTitle from "./SectionTitle";
import Section from "./Section";
import RichText from "./RichText";
import Button from "./Button";

const StyledGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    display: block;
  }
`;

const ContactForm = ({ blok }) => {
  return (
    <Section title={blok.title} {...storyblokEditable(blok)}>
      <Container>
        <Box maxWidth={640} textAlign="center" margin="0 auto" py="4rem">
          <RichText content={blok.content} />
        </Box>
        <Box>
          <Box
            as="form"
            name="contact"
            method="POST"
            data-netlify="true"
            action="/thank-you"
            maxWidth={960}
            margin="0 auto"
          >
            <input type="hidden" name="form-name" value="contact" />
            <StyledGrid>
              <Box>
                <label htmlFor="name">Name</label>
                <Input type="text" name="name" id="name" required />
                <label htmlFor="email">Email</label>
                <Input type="email" name="email" id="email" required />
                <label htmlFor="phone">Phone</label>
                <Input type="tel" name="phone" id="phone" required />
              </Box>
              <Box>
                <label htmlFor="message">Message</label>
                <Box
                  as="textarea"
                  name="message"
                  id="message"
                  rows="5"
                  height="90%"
                  required
                />
              </Box>
            </StyledGrid>
            <Box mb="2rem">
              <label htmlFor="privacy">
                <Input type="checkbox" name="privacy" id="privacy" required />
                Ich stimme der Verarbeitung meiner Daten gemäß der
                Datenschutzerklärung zu.
              </label>
            </Box>
            <Box textAlign="center">
              <Button type="submit">Absenden</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default ContactForm;
