import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const SFooter = styled.footer`
  /* Rodapé */
  background-color: ${colors.primary};
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.3rem;
  a{
    padding-right: 1rem;
  }
  a img{
    width: 20%;
  }
  h2{
    color: ${colors.white};
  }
  h2:hover{
    font-weight: normal;
  }
`
