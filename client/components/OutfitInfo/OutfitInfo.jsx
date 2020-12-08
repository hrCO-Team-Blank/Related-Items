import React, { useState, useEffect } from 'react';
import StarRating from '../StarRating/StarRating.jsx'
import styled from 'styled-components'
import axios from 'axios';

const StyledInfo = styled.div`
line-height: 1.4;
margin-left: 10px
`

const OutfitInfo = ({ outfit }) => {

  const [info, setInfo] = useState([]);

  // componentDidMount rendering product info
  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/products/${outfit}`)
      .then(res => setInfo([res.data]))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <StyledInfo>
        <StarRating outfit={outfit} />
      </StyledInfo>
      <StyledInfo>
        {info.length && info[0]['name']}
      </StyledInfo>
      <StyledInfo>
        <em>{info.length && info[0]['category']}</em>
      </StyledInfo>
      <StyledInfo>
        $ {info.length && info[0]['default_price']}
      </StyledInfo>
    </div>
  );
}

export default OutfitInfo;