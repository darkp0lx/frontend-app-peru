import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import styled from 'styled-components'
import { Modal, ModalButton, ModalComponent } from '../../Base/ModalButton'

export const GridTeam = () => {
  return (
    <Container>
      <Item>
        <img src='https://www.atlassian.com/es/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg' />
        <span>Nombre:hector paolo</span>
        <span>cargo:frontend</span>
        <ModalButton />
      </Item>
      <Item>
        <img src='https://www.atlassian.com/es/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg' />
        <span>Nombre:hector paolo</span>
        <span>cargo:frontend</span>
        <ModalButton />
      </Item>
      <Item>
        <img src='https://www.atlassian.com/es/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg' />
        <span>Nombre:hector paolo</span>
        <span>cargo:frontend</span>
        <ModalButton />
      </Item>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`
const Item = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.5em;
  border-radius: 0.5em;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  button {
    border: none;
    height: 25px;
    background: #ffff00;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: rgba(136, 165, 191, 0.48) 3 2px 13 0px,
      rgba(255, 255, 255, 0.8) -3 -2px 16px 0px;
  }
`
