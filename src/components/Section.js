import { Box } from "@kuma-ui/core";
import SectionTitle from "./SectionTitle";

const Section = ({ title, children, ...props }) => (
  <Box {...props}>
    {title && <SectionTitle title={title} />}
    <Box py="4rem">{children}</Box>
  </Box>
);

export default Section;
