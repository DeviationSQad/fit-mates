import styled from "styled-components";

export const SignUpBtnStyled = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 1.2rem 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;
