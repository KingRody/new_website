import { Box, HStack, Image, Text, styled } from "@kuma-ui/core";
import Glide from "@glidejs/glide";
import { useEffect, useImperativeHandle, useRef } from "react";

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { Container } from "./Container";
import { storyblokEditable } from "@storyblok/react";

const StyledLogoSlider = styled(Box)`
  padding: 2rem 0;
`;

const LogoSlider = ({ blok }) => {
  const sliderRef = useRef();

  useEffect(() => {
    const slider = new Glide(sliderRef.current, {
      type: "carousel",
      perView: 9,
      autoplay: 3000,
      gap: 16,
    });

    slider.mount();
  }, []);

  return (
    <StyledLogoSlider {...storyblokEditable(blok)}>
      <Container>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          overflowX="hidden"
        >
          <Text color="white" opacity={0.5} flexShrink={0} mr="2rem" mb={0}>
            {blok.label}
          </Text>
          <div className="glide" ref={sliderRef}>
            <div className="glide__track" data-glide-el="track">
              <HStack as="ul" alignItems="center" className="glide__slides">
                {blok.logos.map((logo) => (
                  <Box
                    as="li"
                    textAlign="center"
                    className="glide__slide"
                    key={logo.id}
                    mb={0}
                  >
                    <Image src={logo.filename} alt={logo.alt} display="block" />
                  </Box>
                ))}
              </HStack>
            </div>
          </div>
        </HStack>
      </Container>
    </StyledLogoSlider>
  );
};
export default LogoSlider;
