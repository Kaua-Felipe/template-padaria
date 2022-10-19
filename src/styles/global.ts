import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      font-family: "Montserrat", Arial, Helvetica, sans-serif;
      border: none;
      text-decoration: none;
      list-style: none;
  }

  :root {
      --white: whitesmoke;
      --green: #558C03;
      --light-orange: #D9B64E;
      --medium-orange: #BF6D0A;
      --dark-orange: #A63F03;
      --brown: #401201;
      --orange-opacity: #BF6D0A30;
  }
`
