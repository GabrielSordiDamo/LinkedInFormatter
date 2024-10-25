import styled from "styled-components";
import { Breakpoints } from "@/assets/styles/breakpoints.ts";

export const Title = styled.h1`
  font-family: var(--font-family-sans);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-dark);
  margin-bottom: var(--spacing-md);

  @media (min-width: ${Breakpoints.md}) {
    font-size: var(--font-size-lg);
  }
`;
