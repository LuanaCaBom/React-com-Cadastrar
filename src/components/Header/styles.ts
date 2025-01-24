import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const SHeader = styled.header`
  /* Cabeçalho */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary};
  height: 5rem;
  figure {
    display: flex;
    align-items: center;
    img {
      padding-left: 1rem;
      padding-top: 0.3rem;
      width: 35%;
    }
    h2{
      padding-left: 0.3rem;
      font-family: Italianno;
      font-weight: normal;
      color: ${colors.white};
      font-size: 3rem;
    }
  }
  button {
    margin-right: 1rem;
    border-radius: 9%;
    width: 4rem;
    height: 1.8rem;
    background-color: ${colors.secondary};
    color: ${colors.primary};
  }
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  a {
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${colors.white};
  }
  a:hover {
    font-weight: normal;
  }
`