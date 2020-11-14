import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Parse from './Parse.js';
import MainReviewPanel from './components/MainReviewPanel.jsx'
import ProductMeta from './components/ProductMeta.jsx'
import LargeRating from './components/LargeRating.jsx'


class ReviewApp extends React.Component {
  constructor() {
    super();
    this.state = {
      example: '',
      numberOfReviews: ''
    }
  }

  componentDidMount() {
    Parse.getAllList((data) => {
      console.log(data.results)
      ReactDOM.render(<MainReviewPanel reviews={data.results}/>, document.getElementById('reviewPannel'))
      this.setState({numberOfReviews: data.results.length})
    });
    Parse.getProductMeta((meta) => {
     console.log(meta)
     ReactDOM.render(<ProductMeta meta={meta}/>, document.getElementById('productMeta'))
    });
  }
    
  
  render() {
    return ( 
      <div>
        <Container>
        <Row>
          <h3>RATINGS & REVIEWS</h3>
          <br></br>
          <br></br>
        </Row>
        <Row>
          <Col xs={4}>
            <div id='productMeta'></div>
          </Col>
          <Col fluid>
          <br></br>
            <h4><b>{this.state.numberOfReviews} reviews, sorted by <u>relevance</u></b></h4>
            <div id='reviewPannel'></div>
            <br></br>
            <br></br>
            <Button> Add Review + </Button>
            <br></br>
            <br></br>
          </Col>
        </Row>
      </Container>
      </div>
  );
  }
}

export default ReviewApp;

ReactDOM.render(<ReviewApp/>, document.getElementById('root'));