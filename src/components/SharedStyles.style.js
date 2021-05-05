import { css } from "styled-components";

const SharedStyle = css`
  text-decoration: none;
  color: ${(props) => (props.dark ? "var(--true-blue)" : "var(--text-def)")};
  font-size: 18px;
  border: ${(props) => (props.border ? "2px solid var(--text-def)" : "none")};
  border-radius: 20px;
  padding: 5px 20px;
  background-color: ${(props) =>
    props.background ? "var(--text-def)" : "none"};
`;

export default SharedStyle;
