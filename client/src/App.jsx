import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Parse from './Parse.js';
import MainReviewPanel from './components/MainReviewPanel.jsx'
import ProductMeta from './components/ProductMeta.jsx'
import LargeRating from './components/LargeRating.jsx'


class ReviewApp extends React.Component {
  constructor() {
    super();
    this.state = {
      example: ''
    }
  }

  componentDidMount() {
    Parse.getAllList((data) => {
      console.log(data.results)
      ReactDOM.render(<MainReviewPanel reviews={data.results}/>, document.getElementById('reviewPannel'))
    });
    Parse.getProductMeta((meta) => {
     console.log(meta)
     ReactDOM.render(<ProductMeta meta={meta}/>, document.getElementById('productMeta'))
    });
  }
    
  
  render() {
    return ( 
      <div>
        <h1>Ratings and reviews</h1>
        <Container>
        <Row>
          <Col xs={4}>
            <div id='productMeta'></div>
            <Row> Star Chart </Row>
            <Row> Size Review </Row>
            <Row> Comfort Review </Row>
          </Col>
          <Col xs={6}>All Reviews
            <div id='reviewPannel'></div>
          </Col>
        </Row>
      </Container>
      </div>
  );
  }
}

export default ReviewApp;

ReactDOM.render(<ReviewApp/>, document.getElementById('root'));