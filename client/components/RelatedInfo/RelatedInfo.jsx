import React, { useState, useEffect } from 'react';
import StarRating from '../StarRating/StarRating.jsx'
import axios from 'axios';


const RelatedInfo = ({ product }) => {

  const [info, setInfo] = useState([]);

  // componentDidMount rendering product info
  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/products/${product}`)
      .then(

        res => {
          console.log(res.data)
          return setInfo([res.data])
        })
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <div>
        {info.length && info[0]['category']}
      </div>
      <div>
        {info.length && info[0]['name']}
      </div>
      <div>
        $ {info.length && info[0]['default_price']}
      </div>
      <div>
        <StarRating outfit={product} />
      </div>
    </div>
  );
}

export default RelatedInfo;