import React, { useState } from 'react';
import RelatedThumbnail from '../RelatedThumbnail/RelatedThumbnail.jsx'
import RelatedInfo from '../RelatedInfo/RelatedInfo.jsx'
import Comparison from '../Comparison/Comparison.jsx'
import styled from 'styled-components'
import Modal from 'react-modal'

Modal.setAppElement('#RelatedAndOutfit')

const StyledCard = styled.div`

justify-content: space-around;
// flex-grow: 4;
// flex-shrink: 3;
// flex-basis: 100%
height: 350px;
width: 250px;
margin: 5px;
padding: 0px;
border: 1px solid black;
`;

const StyledStarImage = styled.img`
  position: relative;
  height: 35px;
  width: 35px;
  top: 5%;
  left: 80%;
  border: black 1px;
  cursor: pointer;
  margin: 0px;
  background-color: black;
  border-radius: 50%;
  shadow: 10px 10px;
  :hover {
    background-color: gray;
    transform: scale(1.2);
  }
`;

const RelatedCard = ({ product, mainProduct }) => {


  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <StyledCard >
      <Modal isOpen={modalIsOpen} onRequestClose={(e) => { e.stopPropagation(); setModalIsOpen(false); }} shouldCloseOnOverlayClick={true}>
        <Comparison mainProduct={mainProduct} product={product} setModalIsOpen={setModalIsOpen} />
      </Modal>
      <StyledStarImage onClick={() => setModalIsOpen(true)} src='./images/star.png' />
      <RelatedThumbnail product={product} />
      <RelatedInfo product={product} />
    </StyledCard>
  );
}

export default RelatedCard;