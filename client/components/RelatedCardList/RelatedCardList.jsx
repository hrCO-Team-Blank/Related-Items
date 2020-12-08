import React, { useState, useEffect } from 'react';
import RelatedCard from '../RelatedCard/RelatedCard.jsx'
import axios from 'axios';
import styled from 'styled-components'
import Carousel from 'styled-components-carousel';

const StyledCarousel = styled(Carousel)`
display: flex;
align: center
width: 75%
padding: 0;
margin: 0;
list-style: none;
`;

const RelatedCardList = ({ relatedData, mainProduct }) => {

  return (

    <StyledCarousel
      center
      showArrows
      showIndicator
      slidesToShow={3}
      swipeable={false}
      breakpoints={
        [
          {
            size: 300,
            settings: {
              slidesToShow: 1,
              showArrows: true,
              showIndicator: true,
            },
          },
          {
            size: 600,
            settings: {
              slidesToShow: 2,
              showArrows: true,
              showIndicator: true,
            },
          },
          {
            size: 900,
            settings: {
              slidesToShow: 3,
              showArrows: true,
              showIndicator: true,
            },
          },
          {
            size: 1200,
            settings: {
              slidesToShow: 4,
              showArrows: true,
              showIndicator: true,
            },
          },
        ]}
    >
      {relatedData.map((product, index) =>
        // passing on the id of each related item
        <RelatedCard product={product} mainProduct={mainProduct} key={index} />
      )
      }
    </StyledCarousel>
  );
}

export default RelatedCardList;
