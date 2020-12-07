import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

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


const StyledPlusSign = styled.img`
height: 350px;
width: 250px
`;

const AddToOutfit = ({ mainProduct, clickAddOutfit }) => {

  return (
    <div>
      <StyledCard onClick={() => clickAddOutfit()}>
        <StyledPlusSign src='./images/plus.jpg' />
      </StyledCard>
    </div >
  );
}

export default AddToOutfit;