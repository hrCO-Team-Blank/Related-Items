import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';



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


  const StyledTable = styled.div`
    td {
      border: 2px solid black;
    }

  `
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
        featureObj[`${relatedFeatures[j].feature}`] = [null, relatedFeatures[j].value]
      }
    }
  }
  return (
    <div>
      <button onClick={(e) => { e.stopPropagation(); setModalIsOpen(false); }}> X </button>
      {Object.keys(featureObj).length &&
        <table >
          <tr>
            <th>{main[0]['name']}</th>
            <th>Comparison</th>
            <th>{related[0]['name']}</th>
          </tr>
          <tr>
            <td>{main[0]['slogan']}</td>
            <td>Slogan</td>
            <td>{related[0]['slogan']}</td>
          </tr>
          <tr>
            <td>{main[0]['description']}</td>
            <td>Description</td>
            <td>{related[0]['description']}</td>
          </tr>
          <tr>
            <td>{main[0]['category']}</td>
            <td>Category</td>
            <td>{related[0]['category']}</td>
          </tr>
          <tr>
            <td>{main[0]['default_price']}</td>
            <td>Price</td>
            <td>{related[0]['default_price']}</td>
          </tr>
          {Object.keys(featureObj).map(key => {
            return (
              <tr>
                <td>{featureObj[key][0] || 'N/A'}</td>
                <td>{key}</td>
                <td>{featureObj[key][1] || 'N/A'}</td>
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