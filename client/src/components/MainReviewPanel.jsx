import React from 'react';
import SingleReview from './SingleReview.jsx';

class MainReviewPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: props.reviews
    }
  }


  render() {
    return this.state.allReviews.map((review) =>
      <SingleReview review={review} />
    )
  }
}

export default MainReviewPanel

