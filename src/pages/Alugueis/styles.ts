import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto auto auto;
  gap: 1rem;
  padding-bottom: 1.9rem;
  padding-top: 3.5rem;

  @media (max-width: 1660px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 1280px) {
    grid-template-columns: auto auto;
    font-size: 0.9rem;
  }
  @media (max-width: 850px) {
    grid-template-columns: auto;
  }
`
export const Paragrafo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3.5rem;
  font-size: 2rem;
  color: ${colors.tertiary};

`