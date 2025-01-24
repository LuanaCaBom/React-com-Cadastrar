import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  background-color: ${colors.tertiary};
  padding: 1rem;
  width: 25rem;
  border-radius: 0.5rem;
  aside {
    display: flex;
    justify-content: center;
  }
  p, h4, img {
    padding-bottom: 1rem;
    font-size: 1rem;
    margin-left: 0.5rem;
    text-align: center;
  }
  img{
    width: 50rem;
  }
  text{
    padding-bottom: 1rem;
    font-size: 1rem;
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
