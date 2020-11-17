import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Parse from './Parse.js';
import MainReviewPanel from './components/MainReviewPanel.jsx';
import ProductMeta from './components/ProductMeta.jsx';
import AddReviewForm from './components/AddReviewForm.jsx';


class ReviewApp extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      reviewsToShow: [],
      example: '',
      numberOfReviews: '',
      addReview: 0,
      meta: {},
    }
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.handleAddReview = this.handleAddReview.bind(this)
  }

  componentDidMount() {
    Parse.getAllList((data) => {
      console.log(data.results)
      this.setState({numberOfReviews: data.results.length})
      let twoReviews = data.results.splice(0, 2)
      this.setState({reviews: data.results})
      this.setState({reviewsToShow: twoReviews})
      ReactDOM.render(<MainReviewPanel reviews={this.state.reviewsToShow} />, document.getElementById('reviewPannel'))
    });
    Parse.getProductMeta((meta) => {
     console.log(meta)
     this.setState({meta: meta})
     ReactDOM.render(<ProductMeta meta={this.state.meta}/>, document.getElementById('productMeta'))
    });
  }


  handleMoreReviews() {
    let moreReviews = this.state.reviews.splice(0, 2);
    if(moreReviews[0] !== undefined) {
      this.state.reviewsToShow.push(moreReviews[0])
    }
    if(moreReviews[1] !== undefined) {
      this.state.reviewsToShow.push(moreReviews[1])
    }
    this.setState({reviewsToShow: this.state.reviewsToShow})
    this.setState({reviews: this.state.reviews})

    ReactDOM.unmountComponentAtNode(document.getElementById('reviewPannel'))

    ReactDOM.render(<MainReviewPanel reviews={this.state.reviewsToShow} />, document.getElementById('reviewPannel'))
  }

  handleAddReview() {
    if(this.state.addReview === 0) {
      ReactDOM.render(<AddReviewForm />, document.getElementById('reviewForm'))
      this.setState({addReview: 1})
    } else {
      ReactDOM.unmountComponentAtNode(document.getElementById('reviewForm'))
      this.setState({addReview: 0})
    }
  }
    
  
  render() {
    return ( 
      <div>
        <br></br>
          <br></br>
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
            <Button id='reviewButton' onClick={this.handleAddReview}> Add Review + </Button> &nbsp; &nbsp; &nbsp; &nbsp;
            <Button id='reviewButton' onClick={this.handleMoreReviews} >Show More Reviews</Button>
            <br></br>
            <br></br>
            <br></br>
            <div id='reviewForm'>

            </div>
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