import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
  }
`;