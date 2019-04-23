import styled from "styled-components";

export const ClaimStyled = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  width: 65rem;
`;
