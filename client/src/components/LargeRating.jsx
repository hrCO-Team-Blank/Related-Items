import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class LargeRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: props.ratings,
      averageRating: 0
    }
    this.getAverageRating = this.getAverageRating.bind(this);
  }

  componentDidMount() {
    this.getAverageRating();
    ReactDOM.render(this.state.ratings, document.getElementById(number))
  }

  getAverageRating() {
    const sum = this.state.ratings
    const counter = 0;

    for (const key in this.state.ratings) {
      sum += key * this.state.ratings[key];
      counter++;
    }

    const average = sum / counter;
    this.setState({averageRating: average});
  }

  render() {
    <Container>
      <Row>
        <Col>
          <div id='number'></div>
        </Col>
      </Row>
    </Container>
  }
}

export default LargeRating