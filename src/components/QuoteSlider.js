import { Box, HStack, Heading, Image, Text, styled } from "@kuma-ui/core";
import Glide from "@glidejs/glide";
import { useEffect, useImperativeHandle, useRef } from "react";

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { Container } from "./Container";
import { storyblokEditable } from "@storyblok/react";
import SectionTitle from "./SectionTitle";

import QuoteIcon from "../assets/quote.svg";
import Section from "./Section";
import Quote from "./Quote";

const StyledQuoteSlider = styled(Section)`
  padding: 2rem 0;
`;

const StyledLogo = styled(Box)`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.625rem;
  height: 10rem;
  background: var(--dunkel-trkis, #001f24);
`;

const QuoteSlider = ({ blok }) => {
  const quoteSliderRef = useRef();
  const logoSliderRef = useRef();

  useEffect(() => {
    const quoteSlider = new Glide(quoteSliderRef.current, {
      type: "slider",
      perView: 1,
      autoplay: false,
      focusAt: "center",
    });
    quoteSlider.on("run", () => {
      logoSlider.go(`=${quoteSlider.index}`);
    });
    quoteSlider.mount();

    const logoSlider = new Glide(logoSliderRef.current, {
      type: "carousel",
      perView: 3,
      autoplay: false,
      gap: 24,
      peek: 240,
      focusAt: "center",

      breakpoints: {
        768: {
          perView: 1,
          peek: 120,
        },
      },
    });
    logoSlider.on("run", () => {
      quoteSlider.go(`=${logoSlider.index}`);
    });
    logoSlider.mount();
  }, []);

  return (
    <StyledQuoteSlider title={blok.title} {...storyblokEditable(blok)}>
      <Container>
        <div className="glide" ref={quoteSliderRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {blok.quotes.map(
                ({ content, person_name, person_position }, index) => (
                  <li key={index}>
                    <Quote
                      content={content}
                      person_name={person_name}
                      person_position={person_position}
                    />
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </Container>
      <div className="glide" ref={logoSliderRef}>
        <div className="glide__track" data-glide-el="track">
          <HStack
            as="ul"
            py="2rem"
            alignItems="center"
            className="glide__slides"
          >
            {blok.quotes.map(({ logo }, index) => (
              <StyledLogo key={index}>
                <Image src={logo.filename} alt={logo.alt} mb={0} />
              </StyledLogo>
            ))}
          </HStack>
        </div>
      </div>
    </StyledQuoteSlider>
  );
};
export default QuoteSlider;
