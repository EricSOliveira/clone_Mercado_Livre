import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import tshirtImage from '../../../assets/tshirt.png';

import { Container } from './styles';

const Gallery: React.FC = () => {
  return (
    <Container>
      <Carousel>
        <div>
          <img src={tshirtImage} alt="T-Shirt" />
          <p className="legend">Legend 1</p>
        </div>

        <div>
          <img src={tshirtImage} alt="T-Shirt" />
          <p className="legend">Legend 2</p>
        </div>

        <div>
          <img src={tshirtImage} alt="T-Shirt" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </Container>
  );
};

export default Gallery;
