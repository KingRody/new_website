import { Box, Image, Link, Text, styled } from "@kuma-ui/core";
import { storyblokEditable } from "@storyblok/react";
import { Container } from "./Container";
import Button from "./Button";

const StyledSubMenu = styled(Box)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #000;
  padding: 3rem 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-1rem);
  transition: all 0.3s ease-in-out;

  .menu-link:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const StyledSubMenuItemGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const StyledSubMenuItem = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 0.625rem;
  background: var(--dunkel-trkis, #001f24);
  padding: 2rem 1rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

const MenuLink = ({ blok }) => {
  return (
    <Box className="menu-link">
      {blok.is_button ? (
        <Button href={`/${blok.link.cached_url}`} variant="secondary">
          {blok.label}
        </Button>
      ) : (
        <Link href={`/${blok.link.cached_url}`}>{blok.label}</Link>
      )}
      {blok.sub_menu && (
        <StyledSubMenu>
          <Container>
            <StyledSubMenuItemGrid as="ul" listStyle="none" m={0} p={0}>
              {blok.sub_menu.map((nestedBlok) => (
                <Box as="li" key={nestedBlok._uid}>
                  <StyledSubMenuItem
                    as={Link}
                    href={nestedBlok.link.cached_url}
                  >
                    <Image
                      src={nestedBlok.icon.filename}
                      alt={nestedBlok.label}
                      width={70}
                      height={70}
                    />
                    <Text mb={0} color="white">
                      {nestedBlok.label}
                    </Text>
                  </StyledSubMenuItem>
                </Box>
              ))}
            </StyledSubMenuItemGrid>
          </Container>
        </StyledSubMenu>
      )}
    </Box>
  );
};

export default MenuLink;
