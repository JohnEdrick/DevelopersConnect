import styled from "styled-components";

import SharedStyle from "./SharedStyles.style";
export const TextLogo = styled.h2`
  color: var(--text-def);
  font-size: 45px;
`;

export const SignIn = styled.h2`
  color: var(--text-def);
  font-size: 35px;
  padding-bottom: 50px;
`;

export const CompanyName = styled.h1`
  color: var(--text-def);
  font-size: 78px;
  word-spacing: -10px;
`;

export const Paragraph = styled.p`
  color: var(--text-def);
  margin-bottom: 20px;
`;

export const Link = styled.a`
  ${SharedStyle}
  cursor: pointer;
`;
