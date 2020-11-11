import React from 'react';
import ReactDOM from 'react-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import StarRating from './StarRating.jsx'

class SingleReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewId: props.review.review_id,
      body: props.review.body, 
      date: props.review.date.slice(0, 9), 
      helpfulness: props.review.helpfulness,
      photos: props.review.photos,
      rating: props.review.rating,
      recommend: props.review.recommend,
      response: props.review.response,
      reviewerName: props.review.reviewer_name,
      summary: props.review.summary
    }
  }

  render() {
    return (
      <Container id='review' fluid>
        <Row>
          <Col>
            <StarRating rating={this.state.rating} />
          </Col>
          <Col id='date' xs={6}>
            {this.state.reviewerName} - {this.state.date}
          </Col>
        </Row>
        <Row>
          <Col id='summary'>{this.state.summary}</Col>
        </Row>
        <Row>
          <Col id='body'>{this.state.body}</Col>
        </Row>
        <Row>
          <Col>Recommend Product</Col>
        </Row>
        <Row>
          <Col>{this.props.response}</Col>
        </Row>
        <Row>
          <Col>Helpful</Col>
          <Col>Report</Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}

export default SingleReview