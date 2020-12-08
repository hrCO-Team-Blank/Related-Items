import React, { useState, useEffect } from 'react';
import StarRating from '../StarRating/StarRating.jsx'
import axios from 'axios';
import styled from 'styled-components'

const StyledInfo = styled.div`
line-height: 1.4;
margin-left: 10px
`

const RelatedInfo = ({ product }) => {

  const [info, setInfo] = useState([]);

  // componentDidMount rendering product info
  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/products/${product}`)
      .then(
        res => {
          return setInfo([res.data])
        })
      .catch(err => console.log(err))
  }, []);



  return (
    <div>{info.length ?
      <div>
        <StyledInfo>
          <StarRating outfit={product} />
        </StyledInfo>
        <StyledInfo>
          {info[0]['name']}
        </StyledInfo>
        <StyledInfo>
          <em>{info[0]['category']}</em>
        </StyledInfo>

        <StyledInfo>
          $ {info[0]['default_price']}
        </StyledInfo>
      </div> : null}
    </div>
  );
}

export default RelatedInfo;