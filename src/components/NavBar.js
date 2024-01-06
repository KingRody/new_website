import { StoryblokComponent } from "@storyblok/react";
import { Box, HStack, Image, Link, styled } from "@kuma-ui/core";
import { Container } from "./Container";
import { useState } from "react";
import Button from "./Button";

const StyledNavBar = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;
  color: white;
  z-index: 999;
`;

const StyledMenuButton = styled(Box)`
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease-in-out;
  }

  &:before {
    transform: translate(-50%, -4px) rotate(0);
  }

  &:after {
    transform: translate(-50%, 4px) rotate(0);
  }

  &.active {
    &:before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
`;

const NavBar = ({ logo, menu }) => {
  const [active, setActive] = useState(false);

  const handleMenuClick = () => {
    setActive(!active);
  };

  return (
    <StyledNavBar>
      <Container>
        <HStack
          justify="space-between"
          alignItems="center"
          gap={8}
          height="70px"
        >
          <Box p={8}>
            <Link href="/">
              <Image src={logo.filename} alt={logo.alt} height={35} mb={0} />
            </Link>
          </Box>
          <Button variant="secondary" display={["block", "block", "none"]}>
            Book Demo
          </Button>
          <StyledMenuButton
            onClick={handleMenuClick}
            p={8}
            display={["block", "block", "none"]}
          />
          <Box p={8} display={["none", "none", "block"]}>
            <Box as="ul" listStyle="none" m={0} p={0}>
              {menu.map((nestedBlok) => (
                <Box
                  as="li"
                  key={nestedBlok._uid}
                  display="inline-block"
                  px={16}
                  mb={0}
                >
                  <StoryblokComponent blok={nestedBlok} />
                </Box>
              ))}
            </Box>
          </Box>
        </HStack>
      </Container>
      <MobileMenu menu={menu} isOpen={active} />
    </StyledNavBar>
  );
};

const MobileMenu = ({ menu, isOpen }) => {
  return (
    <Box
      position="fixed"
      top={isOpen ? "70px" : "-100vh"}
      left="0"
      width="100%"
      height="100vh"
      background="black"
      zIndex="998"
      overflow="hidden"
      opacity={isOpen ? 1 : 0}
    >
      <Container>
        <Box as="ul" listStyle="none" m={0} p={0}>
          {menu.map((nestedBlok) => (
            <Box as="li" key={nestedBlok._uid} mb={0}>
              <StoryblokComponent blok={nestedBlok} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
