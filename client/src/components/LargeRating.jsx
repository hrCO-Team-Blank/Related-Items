import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRating from './StarRating.jsx'

class LargeRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: props.ratings,
      averageRating: 0
    }
    console.log(this.state)
    this.getAverageRating = this.getAverageRating.bind(this);
  }

  componentDidMount() {
    this.getAverageRating();
  }

  getAverageRating() {
    let sum = 0;
    let counter = 0;
    console.log(average)
    for (const key in this.state.ratings) {
      sum += key * this.state.ratings[key];
      counter += Number(this.state.ratings[key]);
    }
    console.log(counter)
    const average = sum / counter;
    console.log(average)
    this.setState({averageRating: average});
    ReactDOM.render(<StarRating rating={average} />, document.getElementById('nf-stars'))
  }

  render() {
    return(
      <Container>
        <Row>
          <Col xs={3}>
            <div>
              <p id='nf-number'>{this.state.averageRating}</p>
            </div>
          </Col>
          <Col>
            <div id='nf-stars'>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default LargeRating