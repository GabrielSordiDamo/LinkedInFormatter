import styled from "styled-components";
import { Breakpoints } from "@/assets/styles/breakpoints.ts";

export const Button = styled.button<{
  $variant?: "primary" | "secondary" | "text";
}>`
  max-width: 100%;
  background-color: var(--color-primary);
  color: var(--color-light);
  font-size: var(--font-size-base);
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs);

  &:hover {
    filter: brightness(95%);
  }

  &.secondary {
    border: solid 2px var(--color-primary);
    background-color: var(--color-light);
    color: var(--color-primary);
  }

  &.text {
    background-color: transparent;
    color: var(--color-primary);
    box-shadow: none;
    padding: 0;

    &:hover {
      color: var(--color-secondary);
    }
  }

  @media (min-width: ${Breakpoints.md}) {
    font-size: var(--font-size-md);
    padding: var(--spacing-md) var(--spacing-lg);
  }
`;
