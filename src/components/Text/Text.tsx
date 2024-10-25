import styled from "styled-components";
import { Breakpoints } from "@/assets/styles/breakpoints.ts";

export const Text = styled.p`
  font-family: var(--font-family-sans);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  color: var(--color-secondary);

  &.secondary {
    color: var(--color-light);
  }
  @media (min-width: ${Breakpoints.md}) {
    font-size: var(--font-size-md);
  }
`;
