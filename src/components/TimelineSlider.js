import { Box, HStack, Heading, Image, Text, styled } from "@kuma-ui/core";
import Glide from "@glidejs/glide";
import { useEffect, useImperativeHandle, useRef } from "react";

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { Container } from "./Container";
import { storyblokEditable } from "@storyblok/react";
import SectionTitle from "./SectionTitle";
import RichText from "./RichText";

import ArrowIcon from "../assets/arrow.svg";
import Section from "./Section";

const StyledTimelineItem = styled(Box)`
  padding: 2rem;
  border-radius: 2.5rem;
  background: #022c32;
  color: #fff;
  white-space: pre-wrap;
  opacity: 0.5;
  scale: 0.9;
  transition: all 0.2s ease-in-out;

  .glide__slide--active & {
    opacity: 1;
    scale: 1;
  }
`;

const StyledArrow = styled(Box)`
  border-radius: 3rem;
  background: #17fff9;
  border-color: #17fff9;
`;

const TimelineSlider = ({ blok }) => {
  const sliderRef = useRef();

  useEffect(() => {
    const slider = new Glide(sliderRef.current, {
      type: "slider",
      perView: 1,
      autoplay: false,
      focusAt: "center",
      peek: 320,
      gap: 50,

      breakpoints: {
        960: {
          peek: 0,
        },
      },
    });
    slider.mount();
  }, []);
  return (
    <Section title={blok.title} {...storyblokEditable(blok)}>
      <Container>
        <div className="glide" ref={sliderRef}>
          <div className="glide__arrows" data-glide-el="controls">
            <StyledArrow
              as="button"
              left={260}
              transform="translateY(-50%) rotate(180deg)"
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
            >
              <Image src={ArrowIcon.src} />
            </StyledArrow>
            <StyledArrow
              as="button"
              right={260}
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              <Image src={ArrowIcon.src} />
            </StyledArrow>
          </div>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {blok.items.map(({ content }, index) => (
                <li key={index}>
                  <StyledTimelineItem>
                    <RichText content={content} />
                  </StyledTimelineItem>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};
export default TimelineSlider;
