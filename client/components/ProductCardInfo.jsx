import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ProductCardInfo = ({ product }) => {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/products/${product}`)
      .then(res => setInfo([res.data]))
      .catch(err => console.log(err))
  }, []);

  console.log('Info', info)

  return (
    <div>
      {info.length && info[0]['name']}
    </div>
  );
}

export default ProductCardInfo;