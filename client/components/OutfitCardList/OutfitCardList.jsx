import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import AddToOutfit from '../AddToOutfit/AddToOutfit.jsx'
import OutfitCard from '../OutfitCard/OutfitCard.jsx'
import Carousel from 'styled-components-carousel';
import { CSSTransition } from 'react-transition-group';


const StyledCardList = styled.div`
  display: flex;
`;

const OutfitCardList = ({ outfitData, mainProduct, clickAddOutfit, clickDeleteOutfit }) => {

  return (

    <StyledCardList>
      <AddToOutfit mainProduct={mainProduct} clickAddOutfit={clickAddOutfit} />
      {outfitData.map((outfit, index) =>
        <OutfitCard outfit={outfit} key={index} clickDeleteOutfit={clickDeleteOutfit} />
      )}
    </StyledCardList>

  );
}

export default OutfitCardList;