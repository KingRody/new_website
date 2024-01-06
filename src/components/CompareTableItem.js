import { Box, Heading, Image, styled } from "@kuma-ui/core";
import { render } from "storyblok-rich-text-react-renderer";

const StyledItem = styled(Box)`
  margin-bottom: 0.5rem;
`;

const StyledTitle = styled(Box)`
  display: flex;
  padding: 0.875rem 1.25rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.625rem;
  border: 1px solid linear-gradient(rgba(255, 255, 255, 0.2), #fff);
  background: #121212;
  cursor: pointer;
`;

const StyledContent = styled(Box)`
  display: none;
  padding: 1.25rem;

  p:last-child {
    margin-bottom: 0;
  }

  &.active {
    display: block;
  }
`;

const CompareTableItem = ({ blok, icon, isactive, index, onClick }) => {
  return (
    <StyledItem>
      <StyledTitle onClick={() => onClick(index)}>
        <Image src={icon.src} width="24px" height="24px" mb={0} />
        <Heading as="h4" mb={0}>
          {blok.title}
        </Heading>
      </StyledTitle>
      <StyledContent className={isactive && "active"}>
        {render(blok.content)}
      </StyledContent>
    </StyledItem>
  );
};

export default CompareTableItem;
