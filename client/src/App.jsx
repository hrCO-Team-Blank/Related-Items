import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Parse from './Parse.js';


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
    })
  }
    
  
  render() {
    return ( 
      <div>
        <h1>Ratings and reviews</h1>
        <Container>
        <Row>
          <Col>
            <Row>Hello Star Rating</Row>
            <Row>% recommend product</Row>
            <Row> Star Chart </Row>
            <Row> Size Review </Row>
            <Row> Comfort Review </Row>
          </Col>
          <Col>Review Pannel
            <Row>
              <Col>Stars</Col>
              <Col>Post Date</Col>
            </Row>
            <Col>
            <Row>Review Title</Row>
            </Col>
            <Col>
            <Row>Review Preview</Row>
            </Col>
            <Col>
            <Row>Review Main</Row>
            </Col>
            <Col>
            <Row>Recommend Product</Row>
            </Col>
            <Col>
            <Row>Review Response</Row>
            </Col>
            <Col>
            <Row>
              <Col>Helpful</Col>
              <Col>Report</Col>
              <Col></Col>
            </Row>
            </Col>
          </Col>
        </Row>
      </Container>
      </div>
  );
  }
}

export default ReviewApp;

ReactDOM.render(<ReviewApp/>, document.getElementById('root'));