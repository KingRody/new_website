import { Box, Heading, styled } from "@kuma-ui/core";

const StyledSectionTitle = styled(Box)`
  display: flex;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  border-radius: 30px;
  border: 1px solid #0e8683;
  padding: 8px 24px;
  flex-shrink: 0;
  margin-bottom: 0;
`;

const SectionTitle = ({ title }) => {
  return (
    <StyledSectionTitle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="462"
        height="1"
        viewBox="0 0 462 1"
        fill="none"
      >
        <path
          d="M0.5 0.5L461.5 0.5"
          stroke="url(#paint0_linear_1246_1530)"
          stroke-opacity="0.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1246_1530"
            x1="461.5"
            y1="0.5"
            x2="0.5"
            y2="0.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#18FFF9" />
            <stop offset="1" stop-color="#18FFF9" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <StyledHeading as="h2">{title}</StyledHeading>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="462"
        height="1"
        viewBox="0 0 462 1"
        fill="none"
      >
        <path
          d="M0.5 0.5H461.5"
          stroke="url(#paint0_linear_1246_1533)"
          stroke-opacity="0.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1246_1533"
            x1="461.5"
            y1="0.5"
            x2="0.5"
            y2="0.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#18FFF9" stop-opacity="0" />
            <stop offset="1" stop-color="#18FFF9" />
          </linearGradient>
        </defs>
      </svg>
    </StyledSectionTitle>
  );
};

export default SectionTitle;
