import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';

const StyledExitButton = styled.button`
position: relative;
height: 35px;
width: 35px;
top: 5%;
left: 95%;
border: black 1px;
cursor: pointer;
margin: 0px;
color: white;
background-color: black;
border-radius: 50%;
shadow: 10px 10px;
:hover {
  background-color: grey;
  transform: scale(1.2);
}
`;

const StyledCols = styled.td`
text-align: center;
`
const Comparison = ({ mainProduct, product, setModalIsOpen }) => {

  const [main, setMain] = useState([]);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/products/${mainProduct}`)
      .then(res => {
        setMain([res.data])
        axios.get(`http://52.26.193.201:3000/products/${product}`)
          .then(res => setRelated([res.data]))
      })
      .catch(err => console.log(err))
  }, []);




  // Render Features
  // Make array of objects: {feature: [main, related]} Ex. {sole: [rubber, plasic]} or {material: [null, leather]}
  let featureObj = {}
  if (main.length && related.length) {
    let mainFeatures = main[0]['features'];
    let relatedFeatures = related[0]['features'];
    // first insert main features
    for (let i = 0; i < mainFeatures.length; i++) {
      featureObj[`${mainFeatures[i].feature}`] = [mainFeatures[i].value, null]
    }
    for (let j = 0; j < relatedFeatures.length; j++) {
      // first check if key already exists
      if (relatedFeatures[j].feature in featureObj) {
        featureObj[relatedFeatures[j].feature] = [featureObj[relatedFeatures[j].feature][0], relatedFeatures[j].value]
      } else {
        let relatedFeatureObj = {}
        featureObj[`${relatedFeatures[j].feature} `] = [null, relatedFeatures[j].value]
      }
    }
  }

  return (
    <div>
      <StyledExitButton onClick={(e) => { e.stopPropagation(); setModalIsOpen(false); }}> X </StyledExitButton>
      {Object.keys(featureObj).length &&
        <table >
          <tr>
            <th>{main[0]['name']}</th>
            <th></th>
            <th>{related[0]['name']}</th>
          </tr>
          <tr>
            <StyledCols>{main[0]['slogan']}</StyledCols>
            <StyledCols><strong>Slogan</strong></StyledCols>
            <StyledCols>{related[0]['slogan']}</StyledCols>
          </tr>
          <tr>
            <StyledCols>{main[0]['description']}</StyledCols>
            <StyledCols><strong>Description</strong></StyledCols>
            <StyledCols>{related[0]['description']}</StyledCols>
          </tr>
          <tr>
            <StyledCols>{main[0]['category']}</StyledCols>
            <StyledCols><strong>Category</strong></StyledCols>
            <StyledCols>{related[0]['category']}</StyledCols>
          </tr>
          <tr>
            <StyledCols>${main[0]['default_price']}</StyledCols>
            <StyledCols><strong>Price</strong></StyledCols>
            <StyledCols>${related[0]['default_price']}</StyledCols>
          </tr>
          {Object.keys(featureObj).map(key => {
            return (
              <tr>
                <StyledCols>{featureObj[key][0] || '----'}</StyledCols>
                <StyledCols><strong>{key}</strong></StyledCols>
                <StyledCols>{featureObj[key][1] || '----'}</StyledCols>
              </tr>
            )
          })
          }
        </table>
      }
    </div>
  );
}

export default Comparison;