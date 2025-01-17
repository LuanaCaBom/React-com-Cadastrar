import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto auto auto;
  gap: 1rem;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;

  @media (max-width: 1230px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 930px) {
    grid-template-columns: auto auto;
    font-size: 0.9rem;
  }
  @media (max-width: 625px) {
    grid-template-columns: auto;
  }
`
