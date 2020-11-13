import React from 'react';
import StarRatings from 'react-star-ratings';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating
    }
    console.log(this.state.rating)
  }

  render() {
    return (
      <StarRatings rating={this.state.rating} numberOfStars={5} name='rating' starDimension='15px' starSpacing='2px' starRatedColor='blue'/>
    )
  }
}

export default StarRating