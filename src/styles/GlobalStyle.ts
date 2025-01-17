import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }
  
`
export const colors = {
  primary: "#DBCC6D",
  secondary: "#752E2E",
  tertiary: "#D9D9D9",
  black: "#000",
  white: "#fff"
}
