import styled from "styled-components";
import { Breakpoints } from "@/assets/styles/breakpoints.ts";

export const PostWrapper = styled.div`
  width: 100%;
  background-color: var(--color-light);
  border: 1px solid transparent;
  box-shadow: var(--shadow-lg);
  border-radius: 0;
  overflow: hidden;
  font-family: var(--font-family-sans);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${Breakpoints.md}) {
    border-radius: var(--border-radius-lg);
  }
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-md);
  background-color: var(--color-background);
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: var(--spacing-md);
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .name {
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-md);
    color: var(--color-dark);
  }

  .headline {
    font-size: var(--font-size-sm);
    color: var(--color-secondary);
  }
`;

export const PostContent = styled.div`
  padding: var(--spacing-md);
  background: var(--color-background);
  font-size: var(--font-size-base);
  color: var(--color-text);
  flex-grow: 1;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: grayscale;
  word-break: break-word;
  overflow-wrap: break-word;
  .content-text {
    margin-bottom: var(--spacing-md);
  }

  .content-image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: var(--border-radius-sm);
    margin-top: var(--spacing-md);
  }
`;

export const EngagementSection = styled.div`
  display: flex;
  background: var(--color-background);
  padding: var(--spacing-md);
  border-top: 1px solid var(--color-border);
  justify-content: space-around;
`;

export const EngagementButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: var(--color-secondary);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--color-primary);
  }

  span {
    display: none;
  }
  svg {
    margin-right: 5px;
  }
  @media (min-width: ${Breakpoints.md}) {
    span {
      display: inline;
    }
  }
`;

export const ConnectButton = styled(EngagementButton)`
  flex: 1;
  justify-content: flex-end;
`;
