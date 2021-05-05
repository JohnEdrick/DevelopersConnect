import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
.App {
    color: red;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --true-blue: #0466c8ff;
    --usafa-blue: #0353a4ff;
    --dark-cornflower-blue: #023e7dff;
    --oxford-blue: #002855ff;
    --oxford-blue-2: #001845ff;
    --oxford-blue-3: #001233ff;
    --independence: #33415cff;
    --black-coral: #5c677dff;
    --roman-silver: #7d8597ff;
    --manatee: #979dacff;

    --text-def: #f2f3f5;
  }
  body {
   
    background-color: var(--true-blue);
  }
  html {
    scroll-behavior: smooth;
  }
`;
