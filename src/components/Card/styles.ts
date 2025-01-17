import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  background-color: ${colors.tertiary};
  padding: 1rem;
  width: 18rem;
  border-radius: 0.5rem;
  aside {
    display: flex;
    justify-content: center;
  }
  p, h4, img {
    padding-bottom: 1rem;
    font-size: 0.8rem;
    margin-left: 0.5rem;
    text-align: center;
  }
  text{
    padding-bottom: 1rem;
    font-size: 0.8rem;
    margin-left: 0.5rem;
    text-align: justify;
  }
  div{
    display: flex;
  }
  h5:hover{
    font-weight: normal;
  }
`
