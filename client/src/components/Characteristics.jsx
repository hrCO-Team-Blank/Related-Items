import react from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Characteristics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comfort = props.stats.Comfort.value, 
      quality = props.stats.Quality.value, 
      size = props.stats.Size.value, 
      width = props.stats.Width.value
    }
  }


  render () {
    return (
      <Container>
        
      </Container>
    )
  }
}