import React, { useState } from 'react';
import RelatedThumbnail from '../RelatedThumbnail/RelatedThumbnail.jsx'
import RelatedInfo from '../RelatedInfo/RelatedInfo.jsx'
import Comparison from '../Comparison/Comparison.jsx'
import styled from 'styled-components'
import Modal from 'react-modal'
import { FaStar } from 'react-icons/fa'

Modal.setAppElement('#RelatedAndOutfit')

const StyledCard = styled.div`
justify-content: space-around;
// flex-grow: 4;
// flex-shrink: 3;
// flex-basis: 100%
height: 350px;
width: 250px;
margin: 5px;
padding: 5px;
border: 1px solid black;
`;

const StyledStarButton = styled.button`
  position: absolute;
  top: 5%;
  left: 75%;
  // transform: translate(-50%, -50%);
  // -ms-transform: translate(-50%, -50%);
  border: 1px;
  cursor: pointer;
`
const StyledStarImage = styled.img`
  position: absolute;
  height: 20px;
  width: 20px;
  top: 5%;
  left: 80%;
  border: black 1px;
  cursor: pointer;
`;

const RelatedCard = ({ product, mainProduct }) => {


  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div>
      <StyledCard >
        <StyledStarButton onClick={() => setModalIsOpen(true)}>
          <Modal isOpen={modalIsOpen} onRequestClose={(e) => { e.stopPropagation(); setModalIsOpen(false); }} shouldCloseOnOverlayClick={true}>
            <Comparison mainProduct={mainProduct} product={product} setModalIsOpen={setModalIsOpen} />
          </Modal>
          <StyledStarImage src='./images/star.png' />
        </StyledStarButton>
        <RelatedThumbnail product={product} />
        <RelatedInfo product={product} />
      </StyledCard>
    </div>
  );
}

export default RelatedCard;