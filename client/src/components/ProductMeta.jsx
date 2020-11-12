import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LargeRating from './LargeRating.jsx';

class ProductMeta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: props.meta.product_id,
      ratings: props.meta.ratings,
      recommended: props.meta.recommended,
      characteristics: props.meta.characteristics,
      width: props.meta.width,
      comfort: props.meta.comfort
    }
  }



  render() {
    return (
      <div id='mainRating'>
        
      </div>
    )
  }
}

export default ProductMeta