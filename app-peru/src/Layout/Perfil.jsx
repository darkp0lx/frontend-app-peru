import React from 'react'
import styled from 'styled-components'

export const Perfil = () => {
  const user = {
    names: 'jesus ochoa',
    lastNames: 'peres alvela',
    numberPhone: 98774343,
    birthday: '12-12-12',
    email: 'jesus@gmail.com'
  }
  return (
    <Container>
      <h2>Mi perfil</h2>
      <form action=''>
        <img src='https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' />
        <label htmlFor=''>nombre:</label>
        <input value={user.names} type='text' />
        <label htmlFor=''>apellidos:</label>
        <input value={user.lastNames} type='text' />
        <label htmlFor=''>email:</label>
        <input value={user.email} type='email' />
        <label htmlFor=''>birthday:</label>
        <input value={user.birthday} type='text' />
        <button>guardar</button>
      </form>
    </Container>
  )
}

const Container = styled.div`
  padding: 1em;
  border: 1px solid black;
  border-radius: 0.5em;
  width: 30%;
  margin: 10% auto;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0 auto;
  }
  h2 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    margin-top: 1em;
    width: 170px;
    background: green;
    color: white;
    border: none;
    border-radius: 0.5em;
    height: 25px;
    cursor: pointer;
  }
`
