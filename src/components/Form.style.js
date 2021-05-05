import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--usafa-blue);
  margin-top: 100px;
  width: 400px;
  padding: 50px 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 5px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
  width: 300px;
`;
