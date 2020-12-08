import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const StyledCard = styled.div`
justify-content: space-around;
height: 350px;
width: 250px;
margin: 5px;
padding: 0px;
`;

const StyledPlusSign = styled.img`
height: 250px;
width: 250px
box-shadow: 2px 2px 5px 6px #ccc;

`;

const AddToOutfit = ({ mainProduct, clickAddOutfit }) => {

  return (
    <div>
      <StyledCard >
        <StyledPlusSign src='./images/plus.jpg' onClick={() => clickAddOutfit()} />
      </StyledCard>
    </div >
  );
}

export default AddToOutfit;