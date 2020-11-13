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
      percRecommended: 0,
      characteristics: props.meta.characteristics,
      width: props.meta.width,
      comfort: props.meta.comfort
    }
    this.getPercentRecommend = this.getPercentRecommend.bind(this)
  }

  componentDidMount() {
    this.getPercentRecommend()
  }

  getPercentRecommend () {
    let total = this.state.recommended[0] + this.state.recommended[1];
    let recommended = this.state.recommended[1];
    let percent = (recommended / total * 100).toString().slice(0, 4);
    this.setState({percRecommended: percent})
  }



  render() {
    return (
      <div id='mainRating'>
        <Row>
          <LargeRating ratings={this.state.ratings} />
        </Row>
        <Row>
          <p><b>{this.state.percRecommended}</b>% Recommend This Product</p>
        </Row>
      </div>
    )
  }
}

export default ProductMeta