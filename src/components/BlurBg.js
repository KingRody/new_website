import { styled, Box } from "@kuma-ui/core";

const BlurBg = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--dunkel-trkis, #001f24);
  mix-blend-mode: lighten;
  filter: blur(230px);
  z-index: -1;
`;

export default BlurBg;
