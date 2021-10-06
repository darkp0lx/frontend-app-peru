import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import styled from 'styled-components'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

export const ModalButton = () => {
  let subtitle
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal () {
    setIsOpen(true)
  }

  function afterOpenModal () {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }

  function closeModal () {
    setIsOpen(false)
  }

  return (
    <Component>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </Component>
  )
}

const Component = styled.div`
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
