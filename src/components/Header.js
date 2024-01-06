import { Box, HStack } from "@kuma-ui/core";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Container } from "./Container";
import NavBar from "./NavBar";

const Header = ({ blok }) => {
  return (
    <Box {...storyblokEditable(blok)}>
      <NavBar
        logo={blok.logo}
        menu={blok.header_menu}
        mobileNavbarButton={blok.mobile_navbar_button}
      />
    </Box>
  );
};
export default Header;
