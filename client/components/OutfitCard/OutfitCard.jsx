import React from 'react';
import OutfitThumbnail from '../OutfitThumbnail/OutfitThumbnail.jsx'
import OutfitInfo from '../OutfitInfo/OutfitInfo.jsx'
import styled from 'styled-components'

const StyledCard = styled.div`
justify-content: space-around;
height: 350px;
width: 250px;
margin: 5px;
padding: 0px;
border: 1px solid black;
`;

const StyledExitButton = styled.button`
position: relative;
height: 35px;
width: 35px;
top: 5%;
left: 80%;
border: black 1px;
cursor: pointer;
margin: 0px;
background-color: grey;
border-radius: 50%;
shadow: 10px 10px;
:hover {
  background-color: black;
  transform: scale(1.2);
}
`;

const OutfitCard = ({ outfit, clickDeleteOutfit }) => {

  return (
    <div>
      <StyledCard >
        <StyledExitButton onClick={() => { clickDeleteOutfit(outfit) }}>
          X
        </StyledExitButton>
        <OutfitThumbnail outfit={outfit} />
        <OutfitInfo outfit={outfit} />
      </StyledCard>
    </div >
  );
}

export default OutfitCard;