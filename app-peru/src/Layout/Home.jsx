import React from 'react'
import styled from 'styled-components'
import { GridTeam } from '../components/Nav/Team/GridTeam'

export const Home = () => {
  return (
    <Container>
      <h1>Este es el Home de nuestro Team</h1>
      <GridTeam />
    </Container>
  )
}

const Container = styled.div`
  margin: 5%;
  text-align: center;
`
