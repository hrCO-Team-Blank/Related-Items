import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const StyledThumbnail = styled.img`
width: 100%;
height: 75%;
margin-top: -35px;
background-image: linear-gradient(black, white);

`;


const OutfitThumbnail = ({ outfit }) => {
  const [styles, setStyles] = useState([]);

  // componentDidMount rendering first style thumbnail
  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/products/${outfit}/styles`)
      .then(res => setStyles([res.data]))
      .catch(err => console.log(err))
  }, [outfit]);

  return (
    <div>
      {styles.length && <StyledThumbnail src={styles[0]['results'][0]['photos'][0]['thumbnail_url']} />}
    </div>
  );
}

export default OutfitThumbnail;