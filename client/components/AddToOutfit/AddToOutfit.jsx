import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const StyledCard = styled.div`
display: flex;
align: center
  height: 350px;
  width: 250px
  margin: 5px;
  padding: 5px;
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