import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${(props) => (props.fullscreen ? "100vh" : "auto")};
  background-color: ${(props) => (props.background ? "#fff" : "transparent")};
`;

export const Links = styled.ul`
  list-style-type: none;
  display: flex;
  li {
    padding-left: 5px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
